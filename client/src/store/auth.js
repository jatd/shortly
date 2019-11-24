/* eslint-disable no-unused-vars */
import authenticationService from '@/services/authentication';
import router from '@/router';

const authModule = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    isUserLoggedIn: localStorage.getItem('token') || false,
  },

  getters: {
    getUserId: state => state.user.id,
  },

  mutations: {
    login: (state, { user, token }) => {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      }
    },
    logout: state => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.isUserLoggedIn = false;
      state.token = null;
      state.user = null;
    },
  },

  actions: {
    async register({ commit }, { email, password }) {
      await authenticationService.register({
        email,
        password,
      });

      router.push('/login');
    },
    async login({ commit }, { email, password }) {
      const response = await authenticationService.login({
        email,
        password,
      });

      commit('login', {
        token: response.data.token,
        user: response.data.user,
      });
      router.push('/');
    },
    logout({ commit }) {
      commit('logout');
    },
  },
};

export default authModule;
