import axiosInstance from '@/config/axiosInstance'; // Make sure to adjust the path

export default {
  state: {
    // Trip-related state
  },
  mutations: {
    // Trip-related mutations
  },
  actions: {
    // Trip-related actions
    async getTrips() {
      try {
        const response = await axiosInstance.get(`/trips`);
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async getTripsByTruck({ commit }, payload) {
      try {
        const response = await axiosInstance.get(`/trips/truck/${payload.id}`);
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    // Other trip-related actions
  },
};
