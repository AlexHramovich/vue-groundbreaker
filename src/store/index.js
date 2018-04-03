import Vue from 'vue';
import Vuex from 'vuex';

import repos from './modules/repos';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isModalOpen: false,
  },

  mutations: {
    setisModelOpen(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    closeModalWindow(state) {
      state.isModalOpen = false;
    },
  },

  getters: {
    getIsModalOpen: state => state.isModalOpen,
  },

  modules: {
    repos,
    users,
  },
});
