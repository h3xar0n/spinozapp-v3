import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Affects from '@/components/affects/Affects'
import Reader from '@/components/reader/Reader'
import Graph from '@/components/graph/Graph'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/affects',
      name: 'Affects',
      component: Affects
    },
    {
      path: '/reader',
      name: 'Reader',
      component: Reader
    },
    {
      path: '/graph',
      name: 'Graph',
      component: Graph
    }
  ]
})
