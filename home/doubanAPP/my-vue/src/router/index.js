import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import index from '../xianmu/index'
import home from '@/douban/home'
import child1 from '@/douban/child1'
 import child2 from '@/douban/child2'
import child3 from '@/douban/child3'
import child4 from '@/douban/child4'
import add1 from '@/douban/erji/add1'
import add2 from '@/douban/erji/add2'
import add3 from '@/douban/erji/add3'
import add4 from '@/douban/erji/add4'
import add5 from '@/douban/erji/add5'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/child1',
      name: 'child1',
      component: child1,
      children:[
      	{path:'add1',
      	 component:add1,
        },
      	{path:'add2',
      	 component:add2 ,
        },
      	{path:'add3',
      	 component:add3 ,
        },
      	{path:'add4',
      	 component:add4 ,
        },
      	{path:'add5',
      	 component:add5 ,
        },

      ]
    },
    {
      path: '/child2',
      name: 'child2',
      component:child2
    },
    {
      path: '/child3',
      name: 'child3',
      component: child3
    },
    {
      path: '/child4',
      name: 'child4',
      component: child4
    },

  ]
})
