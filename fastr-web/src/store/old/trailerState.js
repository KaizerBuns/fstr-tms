import axiosInstance from '@/config/axiosInstance'; // Make sure to adjust the path

export default {
  state: {
    // Trailer-related state
  },
  mutations: {
    // Trailer-related mutations
  },
  actions: {
    // Trailer-related actions
    async getTrailers() {
      try {
        const response = await axiosInstance.get(`/trailers`);
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    // Other trailer-related actions
    async createTrailer({ commit }, body) {
      try {
        const response = await axiosInstance.post(`/trailers`,
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
    async updateTrailer({ commit }, body) {
      try {
        const response = await axiosInstance.put(`/trailers/${body._id}`,
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
