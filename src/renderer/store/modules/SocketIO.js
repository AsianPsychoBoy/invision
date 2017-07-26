const state = {
    isConnected: false,
    roomJoined: false,
    sysMsg: [],
    userMsg: [],
    users: []
}

const mutations = {
    SOCKET_CONNECT (state) {
        state.isConnected = true
        console.log('socketIO链接成功')
    },
    SOCKET_DISCONNECT (state) {
        state.isConnected = false
    },
    SOCKET_SYS (state, payload) {
        state.roomJoined = true
        state.sysMsg.push(payload[0])
        state.users = payload[1]
        console.log('房间进入成功')
    },
    SOCKET_MSG (state, payload) {
        console.log(payload)
        state.userMsg.push({ user: payload[0], msg: payload[1] })
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
