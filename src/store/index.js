import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    about: {},
    artworks: [],
  },
  mutations: {
    // @TODO : refactor to saveArrayData and saveObjectData accepting state key to save to
    saveProjectsData(state, fetchedData){
      let keys = fetchedData.shift();
      let body = fetchedData;
      let readyState = [];
      for(let arrItem of body){
        let readyProjectItem = {}
        for(let key in keys){
          readyProjectItem[keys[key]] = arrItem[key];
        }
        readyState.push(readyProjectItem);
      }
      
      state.projects = readyState;
    },
    saveAboutData(state, fetchedData){
      let keys = fetchedData.shift();
      let body = fetchedData;
      let readyState = {};
      for(let key in keys){
        readyState[keys[key]] = body[0][key];
      }
      
      state.about = readyState;
    },
    saveArtworksData(state, fetchedData){
      let keys = fetchedData.shift();
      let body = fetchedData;
      let readyState = [];
      for(let arrItem of body){
        let readyItem = {}
        for(let key in keys){
          readyItem[keys[key]] = arrItem[key];
        }
        readyState.push(readyItem);
      }
      
      state.artworks = readyState;
    },
  },
  actions: {
  },
  modules: {
  }
})
