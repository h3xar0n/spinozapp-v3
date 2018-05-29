import Home from '@/components/home/Home'
import AffectIndex from '@/components/affects/AffectIndex'
import AffectPage from '@/components/affects/content/Affect'
import Action from '@/components/affects/content/Action'
import Passion from '@/components/affects/content/Passion'
import Desire from '@/components/affects/content/Desire'
import Joy from '@/components/affects/content/Joy'
import Sorrow from '@/components/affects/content/Sorrow'
import Reader from '@/components/reader/Reader'
import BookMenu from '@/components/reader/Navigation'
import Book1 from '@/components/reader/Book1'
import Book2 from '@/components/reader/Book2'
import Book3 from '@/components/reader/book3/Book3'
import Book3Contents from '@/components/reader/book3/Contents'
import Book3Element1 from '@/components/reader/book3/Element1'
import Book3Element2 from '@/components/reader/book3/Element2'
import Book3Element3 from '@/components/reader/book3/Element3'
import Book3Definition1 from '@/components/reader/book3/definitions/3definition1.vue'
import Book4 from '@/components/reader/Book4'
import Book5 from '@/components/reader/Book5'
import Graph from '@/components/graph/Graph'

export const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/affects',
  name: 'Affects',
  component: AffectIndex,
  children: [{
    path: '',
    component: AffectPage
  },
  {
    path: 'action',
    component: Action
  },
  {
    path: 'passion',
    component: Passion
  },
  {
    path: 'joy',
    component: Joy
  },
  {
    path: 'sorrow',
    component: Sorrow
  },
  {
    path: 'desire',
    component: Desire
  }]
},
{
  path: '/reader',
  name: 'Reader',
  component: Reader,
  children: [{
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
    children: [{
      path: 'definition1',
      component: Book3Definition1
    },
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
},
{
  path: '*',
  redirect: '/'
}
]
