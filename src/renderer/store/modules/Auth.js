const state = {
    roomId: '',
    username: '',
    loggedIn: false,
    role: ''
}

const mutations = {
    LOG_IN (state, payload) {
        state.loggedIn = true
        state.roomId = payload.roomId
        state.username = payload.username
    },
    LOG_OUT (state) {
        state.loggedIn = false
        state.roomId = ''
        state.username = ''
    }
}

const actions = {
    someAsyncTask ({ commit }) {
        // do something async
        commit('INCREMENT_MAIN_COUNTER')
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}
