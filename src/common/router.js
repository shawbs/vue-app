import Vue from 'vue'
import Router from 'vue-router'

// components
import Index from '@/components/user/index'
import Login from '@/components/user/login'
import Register from '@/components/user/register'
import Forget from '@/components/user/forget'
import Home from '@/components/home'

import store from './store'


Vue.use(Router)



const routes = [
    {
      path: '/user',
      component: Index,
      children: [
        { path: '', component: Index },
        { path: 'login', name: 'login', component: Login },
        { path: 'register', name: 'register', component: Register },
        { path: 'forget', name: 'forget', component: Forget },
      ]
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect: '/user/login'
    }
    // {
    //   path: '/registry',
    //   name: 'registry',
    //   // 懒加载组件
    //   component: function (resolve) {
    //     require(['@/components/Registry'], resolve)
    //   }
    // }
]

const router = new Router({
  routes
})

//路由导航钩子
router.beforeEach(function (to, from, next) {
  store.commit('UPDATE_LOADING_STATE', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  setTimeout(()=>{
    store.commit('UPDATE_LOADING_STATE', {isLoading: false})
    
  },1000)
})


export default router