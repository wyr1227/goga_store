import api from '@/api'

let maxToastId = 0

const state = {
  user: {
    type: 0,
    data: {}
  },
  toast: [],
  loading: false
}

const getters = {
  ['getUser'] (state) {
    return state.user;
  },
  ['toast'] (state) {
    return state.toast
  },
  ['loading'] (state) {
    return state.loading
  }
}

const actions = {
  async ['checkLog'] ({commit}) {
    let {data:{StatusCode, mType}} = await api.get('api/StoreUse/Log/LoginState.ashx');
    if (StatusCode === 200 ) {
      commit('setUser', mType)
    } else {
      commit('setUser', 0)
    }
    return StatusCode;
  },
  ['toast'] ({commit}, text) {
    let id = ++ maxToastId;
    commit('addToast', {id, text: text})
    setTimeout(() => commit('removeToast', id), 2000)
  },
  async ['getAccount'] ({commit}) {
    let {data} = await api.get('api/StoreUse/Log/ManagerInfo.ashx');
    if (data.StatusCode === 200) {
      commit('setAccount', data);
    }
    return StatusCode;
  },
  ['setLoading'] ({commit} , loading) {
    commit('setLoading', loading)
  }
}

const mutations = {
  ['setUser'] (state, type) {
    state.user.type = type || 0;
  },
  ['addToast'] (state, message) {
    state.toast.push(message)
  },
  ['removeToast'] (state, id) {
    state.toast = state.toast.filter(m => m.id !== id)
  },
  ['setAccount'] (state, {mAccount, strType}) {
    state.user.data = {
      mAccount,
      strType
    }
  },
  ['setLoading'] (state, loading) {
    state.loading = loading
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
