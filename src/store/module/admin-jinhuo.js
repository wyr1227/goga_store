import api from '@/api'
import format from 'timestamp-format'
import _ from 'underscore'
const state = {
  date: "",
  jinhuo: {
    list: [],
    isLoad: false
  },
  days: [],
  shop: {
    list: [],
    id: '',
    goName: '',
    goNum: ''
  }
}

const getters = {
  ['getDate'] (state) {
    return state.date;
  },
  ['getList'] (state) {
    return state.jinhuo;
  },
  ['getDays'] (state) {
    return state.days;
  },
  ['getShop'] (state) {
    return state.shop;
  }
}

const actions = {
  ['getDate'] ({commit, state}, timestamp) {
    let date = format('yyyy年MM月dd日', timestamp);
    if(state.date == date) {
      return false;
    } else {
      commit('setDate', date)
      return date;
    }
  },
  async ['getJinhuo'] ({commit}, timestamp) {
    let {data: {goodsList, StatusCode, Status}} = await api.get('api/StoreUse/stockManager/allPurchaseList.ashx', {pdate: parseInt(timestamp/1000)});
    if(StatusCode == '200') {
      commit('setList', goodsList)
    }
  },
  async ['getCalendar'] ({commit}, {year, month}) {
    let {data:{StatusCode, days}} = await api.get('api/StoreUse/stockManager/purchaseCalendar.ashx', {year, month})
    if(StatusCode == '200') {
      commit('setDays', days);
    }
  },
  ['addRemark'] ({commit, state}, {id, goRemark}) {
    let index = _.findIndex(state.jinhuo.list, function (item) {
      return item.id = id;
    })
    if(index>=0) {
      commit('setRemark', {index, remark: goRemark})
    }
  },
  async ['getShop'] ({commit, state}, id) {
    if(state.shop.id === id) {
      return
    }
    let {data:{StatusCode, goName, goNum, goodsList}} = await api.get('api/StoreUse/stockManager/storeGoodPurchaseDetail.ashx',{id});
    if(StatusCode === '200') {
      commit('setShop', {goName, goNum, id, list: goodsList})
    }

  }
}

const mutations = {
  ['setDate'] (state, date) {
    state.date = date
  },
  ['setList'] (state, list) {
    state.jinhuo.list = list;
    state.jinhuo.isLoad = true;
  },
  ['setDays'] (state, days) {
    state.days = days;
  },
  ['setRemark'] (state, {index, remark}) {
    let newList = state.jinhuo.list;
    newList[index].goRemark = remark
    state.jinhuo.list = newList
  },
  ['setShop'] (state, {goName, goNum, id, list}) {
    state.shop = {
      goName,
      goNum,
      id,
      list
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

