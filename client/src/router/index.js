import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Second from '@/components/Second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    }, 
    {
      path: '/jj',
      name: 'Home',
      component: Second
    }
  ]
})
