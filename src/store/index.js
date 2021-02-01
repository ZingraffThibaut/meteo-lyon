import Vuex from 'vuex';
import Vue from 'vue';
import Cities from './modules/cities.js';

//Load Vuex
Vue.use(Vuex);

// Create New Store
export default new Vuex.Store({
    modules: {
        Cities
    }
})