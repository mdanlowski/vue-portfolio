import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import dataEndpointConfig from '@/data/config';

Vue.use(VueRouter)
const ProjectsDataSheetRange = 'Projects!B2:I9';
const AboutDataSheetRange = 'About!B2:G3';
const ArtworksDataSheetRange = 'Artworks!B2:G6';

const routes = [
  {
    path: '/',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    beforeEnter: (to, from, next) => {
      if(Object.keys(store.state.about).length > 0) { return next(); }
      fetch(dataEndpointConfig.url(AboutDataSheetRange))
        .then(function(response){ return response.json()})
        .then(function(responseJson){
          store.commit('saveAboutData', responseJson.values);
          next();
        })
        .catch(function(error){
          alert("Server error or unreachable | " + error);
        }).finally(function(){});
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
    },
    beforeEnter: (to, from, next) => {
      if(Object.keys(store.state.projects).length > 0) { return next(); }
      fetch(dataEndpointConfig.url(ProjectsDataSheetRange))
        .then(function(response){ return response.json()})
        .then(function(responseJson){
          store.commit('saveProjectsData', responseJson.values);
          next();
        })
        .catch(function(error){
          alert("Server error or unreachable | " + error);
        }).finally(function(){});
    }
  },
  {
    path: '/artworks',
    name: 'artworks',
    component: function () {
      return import(/* webpackChunkName: "art" */ '../views/Art.vue')
    },
    beforeEnter: (to, from, next) => {
      if(Object.keys(store.state.artworks).length > 0) { return next(); }
      fetch(dataEndpointConfig.url(ArtworksDataSheetRange))
        .then(function(response){ return response.json()})
        .then(function(responseJson){
          store.commit('saveArtworksData', responseJson.values);
          next();
        })
        .catch(function(error){
          alert("Server error or unreachable | " + error);
        }).finally(function(){});
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
