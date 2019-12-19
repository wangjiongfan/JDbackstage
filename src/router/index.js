import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/Adduser.vue'
import List from '../views/List.vue'
import Welcom from '../views/Welcom.vue'
import Product from '../views/Product.vue'
import test1 from '../views/test.vue'
import scroll from '../views/scroll.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'home',
    component: Home,
    children:[
      {
        path: '',
        name: 'welcom',
        component: Welcom
      },
      {
        path: 'home/add',
        name: 'add',
        component: Add
      },
      {
        path: 'home/list',
        name: 'list',
        component: List
      },
      {
        path: 'home/scroll',
        name: 'scroll',
        component: scroll
      },
      {
        path: 'component/product',
        name: 'product',
        component: Product
      },
      {
        path: 'component/test1',
        name: 'test1',
        component: test1
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function(to,from,next){
  if(to.path == '/'){
    next('/admin');
  }else{
    next();

  }
})

export default router
