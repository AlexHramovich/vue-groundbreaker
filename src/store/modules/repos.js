import { getUsersRepos } from '../../controllers/controller';

const state = {
  isReposLoading: false,
  repos: [],
};

const getters = {
  getIsReposLoading: state => state.isReposLoading,
  getRepos: state => state.repos,
};

const mutations = {
  setRepos(state, { repos }) {
    state.repos = repos;
  },

  setIsReposLoading(state) {
    state.isReposLoading = !state.isReposLoading;
  },
};

const actions = {
  fetchRepos({ commit }, userLogin) {
    commit('setIsReposLoading');
    commit('setisModelOpen');

    const repos = getUsersRepos(userLogin).then(res => {
      commit('setRepos', { repos: res });
      commit('setIsReposLoading');
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
