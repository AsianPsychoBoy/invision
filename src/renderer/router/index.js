import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/create-room',
            name: '创建活动',
            component: require('@/components/CreateRoom')
        },
        {
            path: '/',
            name: '直播列表',
            component: require('@/components/RoomList')
        },
        {
            path: '/profile',
            name: '我的资料',
            component: require('@/components/Profile')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
