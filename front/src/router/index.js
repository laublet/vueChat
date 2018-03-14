import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import noLogged from '@/components/noLogged'
import logged from '@/components/logged'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'noLogged',
      component: noLogged
    },
    {
      path: '/dashboard',
      name: 'logged',
      component: logged
    }
  ]
})
