import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/room/:roomId',
            name: '直播间',
            component: require('@/components/Room'),
            props: true
        },
        {
            path: '/login',
            name: '登陆',
            component: require('@/components/Login'),
            props: true
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
