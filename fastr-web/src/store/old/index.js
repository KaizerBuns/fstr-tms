import { createStore } from 'vuex';
import accountState from './accoutState';
import truckState from './truckState';
import trailerState from './trailerState';
import driverState from './driverState';
import tripState from './tripState';
import axiosInstance from '@/config/axiosInstance';
import { Device } from '@capacitor/device';
import { Geolocation } from '@capacitor/geolocation';

let deviceId = {};
let deviceCoordinates = {};
let deviceInfo = {};

(async () => {
  deviceInfo = await Device.getInfo();
  deviceId = await Device.getId();

  if (deviceInfo.platform === 'android') {
    deviceCoordinates = await Geolocation.getCurrentPosition();
  }
})();

const store = createStore({
  modules: {
    account: accountState,
    truck: truckState,
    trailer: trailerState,
    driver: driverState,
    trip: tripState,
  },
  state() {
    return {
      data: {
        auth: {
          authenticated: false,
          username: null,
          role: null,
        },
        device: {
          info: deviceInfo,
          id: deviceId,
          coordinates: deviceCoordinates,
        },
        views: [],
        records: {
          trucks: [],
          trailers: [],
          accounts: [],
          drivers: [],
          trips: [],
        },
      },
      accessToken: null,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    initialiseVars(state) {
      if (localStorage.getItem('data')) {
        state.data = JSON.parse(localStorage.data);
      }
    },
    updateAccessToken(state, token) {
      state.accessToken = token;
    },
    updateData(state, data) {
      state.data = data;
    },
    logout(state) {
      state.accessToken = null;
      state.data.auth = {
        authenticated: false,
        role: null,
        username: null,
      };
      state.data.views = [];
      // Remove the refresh token cookie on the client side
      document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const response = await axiosInstance.post('/auth/login', {
          username,
          password,
        });

        if (response.status === 200) {
          const accessToken = response.headers['authorization']?.split(' ')[1] ?? 'a';
          const { data } = store.state;
          const trucks = await axiosInstance.get(`/trucks`);
          const trailers = await axiosInstance.get(`/trailers`);
          const accounts = await axiosInstance.get(`/accounts`);
          const drivers = await axiosInstance.get(`/drivers`);
          const trips = await axiosInstance.get(`/trips`);
          commit('updateData', {
            ...data,
            auth: {
              ...data.auth,
              username: response.data.username,
              role: response.data.role,
              authenticated: true,
            },
            trucks: trucks.data,
            trailers: trailers.data,
            accounts: accounts.data,
            drivers: drivers.data,
            trips: trips.data,
          });
          commit('updateAccessToken', accessToken);

          const views = await store.dispatch('getRoleViews', { role: response.data.role });
          if (!views) return new Error('role not found');

          return true;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async getRoleViews({ commit }, { role }) {
      try {
        const response = await axiosInstance.get(`/views/${role}`);
        const { data } = store.state;
        if (response.status === 200) {
          commit('updateData', { ...data, views: response.data.views });
          return true;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async logout({ commit }) {
      commit('logout');
      return true;
    },
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem('data', JSON.stringify(state.data));
});
// Request interceptor
axiosInstance.interceptors.request.use(request => {
  // Add the access token to the Authorization header
  const accessToken = store.state.accessToken;
  if (accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return request;
}, error => {
  return Promise.reject(error);
});

// Response interceptor
axiosInstance.interceptors.response.use(response => {
  return response;
}, async error => {
  // Check if it's a 401 error
  // If the error was not 401 just reject as is
  const originalRequest = error.config;

  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const accessRes = await axiosInstance.post('/auth/refresh');
    const newToken = accessRes.headers['authorization'].split(' ')[1];

    store.commit('setAccessToken', newToken);  // Update the access token in your Vuex store

    originalRequest.headers['Authorization'] = `Bearer ${newToken}`;  // Change the expired token in the original request
    return axiosInstance(originalRequest);  // And then retry the original request
  }

  return Promise.reject(error);
});

export default store;
