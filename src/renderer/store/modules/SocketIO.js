const state = {
    isConnected: false,
    roomJoined: false,
    sysMsg: [],
    userMsg: [],
    teacherMsg: [],
    users: [],
    totalUsers: 0
}

const mutations = {
    SOCKET_CONNECT (state) {
        state.isConnected = true
        console.log('socketIO链接成功')
    },
    SOCKET_DISCONNECT (state) {
        Object.assign(state, {
            isConnected: false,
            roomJoined: false,
            sysMsg: [],
            userMsg: [],
            teacherMsg: [],
            users: [],
            totalUsers: 0
        })
        console.log('socketIO链接断开')
    },
    SOCKET_SYS (state, payload) {
        state.roomJoined = true
        state.sysMsg.push(payload[0])
        state.users = payload[1]
        state.totalUsers = payload[2]
        console.log('房间进入成功')
    },
    SOCKET_MSG (state, payload) {
        console.log(payload)
        let type = payload[1].type
        if (type === 0 || type === 1) {
            state.teacherMsg.push(payload[1])
        } else {
            state.userMsg.push(payload[1])
            if (state.userMsg.length > 3) {
                state.userMsg.shift()
            }
        }
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
