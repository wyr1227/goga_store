import api from '@/api'
import format from 'timestamp-format'
const state = {
  date: "",
  send: {
    list: [],
    isLoad: false
  },
  days: []
}

const getters = {
  ['getDate'] (state) {
    return state.date
  },
  ['getList'] (state) {
    return state.send
  },
  ['getDays'] (state) {
    return state.days;
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
  async ['getList'] ({commit}, timestamp) {
    let {data: {purchaseList, StatusCode}} = await api.get('api/StoreUse/stockManager/storePurchaseList.ashx', {pdate: parseInt(timestamp/1000)});
    if(StatusCode == 200) {
      commit('setList', purchaseList);
    } else {
      commit('setList', []);
    }
  },
  async ['getCalendar'] ({commit}, {year, month}) {
    let {data:{StatusCode, days}} = await api.get('api/StoreUse/stockManager/purchaseCalendar.ashx', {year, month})
    if(StatusCode == '200') {
      commit('setDays', days);
    }
  }
}

const mutations = {
  ['setDate'] (state, date) {
    state.date = date
  },
  ['setList'] (state, list) {
    state.send.list = list;
    state.send.isLoad = true;
  },
  ['setDays'] (state, days) {
    state.days = days;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

