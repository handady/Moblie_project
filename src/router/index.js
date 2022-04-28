import { Toast } from 'vant'
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
    component: () => import('../pages/MyCart/MyCart'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: () => import('../pages/Mine/Mine'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/MyOrder',
    name: 'MyOrder',
    component: () => import('../pages/MyOrder/MyOrder'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/MyStore',
    name: 'MyStore',
    component: () => import('../pages/MyStore/MyStore'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/OrderList',
    name: 'OrderList',
    component: () => import('../pages/MyOrder/OrderList'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('../pages/Address/address'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/addressedit',
    name: 'addressedit',
    component: () => import('../pages/Address/addressedit'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../pages/Mine/manage'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login/login'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/Login/register'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.isAuth){
    if(localStorage.getItem('isLogin')){
      next()
    }else{
      Toast("请先登录")
      router.push('/login')
    }
  }
  else{
    next()
  }
})

export default router
