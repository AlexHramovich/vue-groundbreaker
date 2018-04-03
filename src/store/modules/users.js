import { getUsers } from '../../controllers/controller';

const state = {
  isUsersLoading: false,
  users: [],
};

const getters = {
  getUsers: state => state.users,
  getIsUserLoading: state => state.isUsersLoading,
};

const mutations = {
  setUsers(state, { users }) {
    state.users = users;
  },

  setIsUserLoading(state) {
    state.isUsersLoading = !state.isUsersLoading;
  },

  resetUsers(state) {
    state.users = [];
  },
};

const actions = {
  fetchUsers({ commit }, userLogin) {
    commit('setIsUserLoading');

    const users = getUsers(userLogin).then(res => {
      commit('setUsers', { users: res });
      commit('setIsUserLoading');
    });
  },

  resetState({ commit }) {
    commit('closeModalWindow');
    commit('resetUsers');
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
