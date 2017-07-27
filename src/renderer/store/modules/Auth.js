const state = {
    roomId: '',
    username: '',
    loggedIn: false,
    role: 0,
    userImg: ''
}

const mutations = {
    LOG_IN (state, payload) {
        state.loggedIn = true
        state.roomId = payload.roomId
        state.username = payload.username
        state.role = payload.role
    },
    LOG_OUT (state) {
        Object.assign(state, state = {
            roomId: '',
            username: '',
            loggedIn: false,
            role: 0,
            userImg: ''
        })
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
