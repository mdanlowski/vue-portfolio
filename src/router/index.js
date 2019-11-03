import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'
import dataEndpointConfig from '@/data/config';

Vue.use(VueRouter)
const RANGE = 'Projects!B2:I9';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
    },
    beforeEnter: (to, from, next) => {
      if(Object.keys(store.state.projects).length > 0) { return next() }
      fetch(dataEndpointConfig.url(RANGE))
        .then(function(response){ return response.json()})
        .then(function(responseJson){
          store.commit('saveProjectsData', responseJson.values);
          if(store.state.projects.length > 0) {
            next();
          } else {
            alert('Sorry. Failed to fetch projects data.')
          }
        })
        .catch(function(error){
          console.log("Server error or unreachable | " + error);
        }).finally(function(){});
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
