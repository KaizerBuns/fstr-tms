/**
 * Store for API Calls
 */

/* eslint no-eval: 0 */
const app = {
  namespaced: true,
  state: {
    setting: {},
    dataStorage: {},
  },
  mutations: {
    setItems(state, payload) {
      state.dataStorage[payload.itemType] = payload.itemData;
    },
    addItem(state, payload) {
      state.dataStorage[payload.itemType].unshift(payload.itemData);
    },
    delLastItem(state, payload) {
      state.dataStorage[payload.itemType].shift();
    },
    clearItems(state) {
      state.dataStorage = {};
    },
    setSetting(state, payload) {
      state.setting[payload.itemType] = payload.itemData;
    },
  },
  getters: {
    getSetting: (state) => (itemType, returnDefault) => {
      return state.setting[itemType] || returnDefault || [];
    },
    getItems: (state) => (itemType, returnDefault) => {
      return state.dataStorage[itemType] || returnDefault || [];
    },
  },
  actions: {
    setItems(context, payload) {
      context.commit("setItems", payload);
    },
    addItem(context, payload) {
      context.commit("addItem", payload);
    },
    delLastItem(context, payload) {
      context.commit("delLastItem", payload);
    },
    clearItems(context) {
      context.commit("clearItems");
    },
    setSetting(context, payload) {
      context.commit("setSetting", payload);
    },
  },
};

export default app;
