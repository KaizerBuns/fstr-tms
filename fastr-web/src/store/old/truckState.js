import axiosInstance from '@/config/axiosInstance'; // Make sure to adjust the path

export default {
  state: {
    // Truck-related state
  },
  mutations: {
    // Truck-related mutations
  },
  actions: {
    // Truck-related actions
    async getTrucks() {
      try {
        const response = await axiosInstance.get(`/trucks`);
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async getTruckById({ commit }, payload) {
      try {
        const response = await axiosInstance.get(`/trucks/${payload.id}`);
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async createTruck({ commit }, body) {
      try {
        const response = await axiosInstance.post(`/trucks`,
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
    async updateTruck({ commit }, body) {
      try {
        const response = await axiosInstance.put(`/trucks/${body._id}`,
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
    // Other truck-related actions
  },
};
