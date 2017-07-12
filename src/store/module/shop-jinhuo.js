import api from '@/api'
import format from 'timestamp-format'
const state = {
  date: "",
  jinhuo: {
    list: [],
    isLoad: false
  },
  days: [],
  record: [],
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
  ['getRecord'] (state) {
    return state.record;
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
    let {data: {goodsList, StatusCode}} = await api.get('api/StoreUse/storeManager/purchaseList.ashx', {pdate: parseInt(timestamp/1000)});
    if(StatusCode == 200) {
      commit('setList', goodsList);
    }
  },
  async ['getJinhuoRecord'] ({commit, dispatch}, timestamp) {
    dispatch('global/setLoading', true, {root:true});
    let {data: {goodsList, StatusCode, Status}} = await api.get('api/StoreUse/storeManager/purchaseList.ashx', {pdate: parseInt(timestamp/1000)});
    if(StatusCode == '200') {
      commit('setRecord', goodsList)
    }
    dispatch('global/setLoading', false, {root:true});
  },
  async ['del'] ({commit, dispatch}, id) {
    dispatch('global/setLoading', true, {root:true});
    let {data: {StatusCode, Status}} = await api.post('api/storeUse/StoreManager/delPurchase.ashx', {id } );
    if(StatusCode == 200) {
      dispatch('global/toast', '删除成功', {root:true});
      commit('del', id);
    } else {
      dispatch('global/toast', Status, {root:true});
    }
    dispatch('global/setLoading', false, {root:true});
  },
  async ['getCalendar'] ({commit}, {year, month}) {
    let {data:{StatusCode, days}} = await api.get('api/StoreUse/storeManager/purchaseCalendar.ashx', {year, month})
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
    state.jinhuo.list = list;
    state.jinhuo.isLoad = true;
  },
  ['del'] (state, id){
    state.jinhuo.list = state.jinhuo.list.filter(item => {
      return  item.id != id
    })
  },
  ['setDays'] (state, days) {
    state.days = days;
  },
  ['setRecord'] (state, list) {
    state.record = list;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

