import axiosInstance from '@/config/axiosInstance'; // Make sure to adjust the path

export default {
  state: {
    // Account-related state
  },
  mutations: {
    // Account-related mutations
  },
  actions: {
    // Account-related actions
    async getAccounts() {
      try {
        const response = await axiosInstance.get(`/accounts`);
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async createAccount({ commit }, body) {
      try {
        const response = await axiosInstance.post(`/accounts`,
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
    async updateAccount({ commit }, body) {
      try {
        const response = await axiosInstance.put(`/accounts/${body._id}`,
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
    // Other account-related actions
  },
};
