import axiosInstance from '@/config/axiosInstance'; // Make sure to adjust the path

export default {
  state: {
    // Driver-related state
  },
  mutations: {
    // Driver-related mutations
  },
  actions: {
    // Driver-related actions
    async getDrivers() {
      try {
        const response = await axiosInstance.get(`/drivers`);
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    // Other driver-related actions
    async createDriver({ commit }, body) {
      console.log('createDriver: ', body);
      try {
        const response = await axiosInstance.post(`/drivers/`,
          body,
        );
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async updateDriver({ commit }, body) {
      try {
        const response = await axiosInstance.put(`/drivers/${body._id}`,
          body,
        );
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },

};
