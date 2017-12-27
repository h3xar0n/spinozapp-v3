import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Graph from '@/components/graph/Graph'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/graph',
      name: 'Graph',
      component: Graph
    }
  ]
})
