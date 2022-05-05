import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../components/Landing.vue'
import Form from '../components/Form.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    // /search/screens -> /search?q=screens
    path: '/services',
    redirect: '/'
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
