import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'
import dataEndpointConfig from '@/data/config';

Vue.use(VueRouter)
const RANGE = 'Projects!B2:I8';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      fetch(dataEndpointConfig.url(RANGE))
        .then(function(response){ return response.json()})
        .then(function(responseJson){
          store.commit('saveProjectsData', responseJson.values);
          if(store.state.projects.length > 0) {
            next();
          } else {
            alert('Sorry. Failed to fetch projects data')
          }
        })
        .catch(function(error){
          console.log("Server error or unreachable | " + error);
        }).finally(function(){});
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
