import { createRouter, createWebHashHistory } from 'vue-router'
import MyHome from '../pages/MyHome/MyHome'

const routes = [
  {
    path: '/',
    name: 'Myhome',
    component: MyHome
  },
  {
    path: '/MyCart',
    name: 'MyCart',
    component: () => import('../pages/MyCart/MyCart')
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: () => import('../pages/Mine/Mine')
  },
  {
    path: '/MyOrder',
    name: 'MyOrder',
    component: () => import('../pages/MyOrder/MyOrder')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
