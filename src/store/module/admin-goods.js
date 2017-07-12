import api from '@/api'

const state = {
  list: [],
  history: {
    list: [],
    page: 0,
    pageNum: 0,
    id: ''
  }
}

const getters = {
  ['getGoods'] (state) {
    return state.list
  },
  ['getHistory'] (state) {
    return state.history;
  }
}

const actions = {
  async ['getGoods'] ({commit}) {
    let {data: {StatusCode, goodsList}} = await api.get('api/storeUse/StockManager/allGoodsList.ashx');
    if(StatusCode == 200) {
      commit('setList', goodsList)
    }
  },
  async ['getHistory'] ({commit,state}, {page, id}) {
    if(state.history.list.length >0 && state.history.id == id && page == 1) {
      return;
    }
    let config = {
      goSn: id,
      CurrentPage: page,
      PageSize: 10
    }
    let {data: {orderList, pageNum, StatusCode}} = await api.get('api/StoreUse/stockManager/historyGoodsPriceList.ashx', config);
    if(StatusCode == '200') {
      commit('setHistory', {list: orderList, pageNum: parseInt(pageNum), id, page})
    }
  },
  async ['delete'] ({commit, dispatch}, {id, index}) {
      dispatch('global/setLoading', true, {root:true});
      let {data: {StatusCode, Status}} = await api.post('api/storeUse/StockManager/delGoods.ashx', {id});
      if(StatusCode == '200') {
        commit('deleteList', index);
        dispatch('global/toast', '删除成功', {root: true});
      } else {
        dispatch('global/toast', Status, {root: true});
      }
      dispatch('global/setLoading', false, {root:true});
  }
}
const mutations = {
  ['setList'] (state, goodsList) {
    return state.list = goodsList
  },
  ['setHistory'] (state, {list, page, pageNum, id}) {
    if(page == 1) {
      state.history.list = [].concat(list)
    } else {
      state.history.list = state.history.list.concat(list)
    }
    state.history.page = page;
    state.history.id = id;
    state.history.pageNum = pageNum;
  },
  ['deleteList'] (state, index) {
    state.list.splice(index, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

