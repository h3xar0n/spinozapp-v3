import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Affects from '@/components/affects/Affects'
import Reader from '@/components/reader/Reader'
import BookMenu from '@/components/reader/Navigation'
import Book1 from '@/components/reader/Book1'
import Book2 from '@/components/reader/Book2'
import Book3 from '@/components/reader/book3/Book3'
import Book3Contents from '@/components/reader/book3/Contents'
import Book3Element1 from '@/components/reader/book3/Element1'
import Book3Element2 from '@/components/reader/book3/Element2'
import Book3Element3 from '@/components/reader/book3/Element3'
import Book4 from '@/components/reader/Book4'
import Book5 from '@/components/reader/Book5'
import Element from '@/components/reader/Element'
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
      component: Reader,
      children: [
        {
          path: '',
          component: BookMenu
        },
        {
          path: 'book1',
          component: Book1
        },
        {
          path: 'book2',
          component: Book2
        },
        {
          path: 'book3',
          component: Book3,
          children: [
            {
              path: '',
              component: Book3Contents
            },
            {
              path: 'e1',
              component: Book3Element1
            },
            {
              path: 'e2',
              component: Book3Element2
            },
            {
              path: 'e3',
              component: Book3Element3
            }
          ]
        },
        {
          path: 'book4',
          component: Book4
        },
        {
          path: 'book5',
          component: Book5
        }
      ]
    },
    {
      path: '/graph',
      name: 'Graph',
      component: Graph
    }
  ]
})
