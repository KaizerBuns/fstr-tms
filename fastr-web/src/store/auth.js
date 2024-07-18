import cookies from "vue-cookies";

const auth = {
  namespaced: true,
  state: {
    token: "",
    user: {},
    isDispatcher: false,
    isDriver: false,
    message: "",
  },
  mutations: {
    token(state, token) {
      state.token = token;
    },
    user(state, user) {
      state.user = user;
    },
    message(state, value) {
      state.message = value;
    },
    dispatcher(state, value) {
      state.isDispatcher = value;
    },
    driver(state, value) {
      state.isDriver = value;
    },
  },
  getters: {
    isAuthenticated: (state) => {
      let checkToken = state.token;
      if (checkToken.length === 0) {
        checkToken = cookies.get("token") || "";
      }
      return checkToken.length ? true : false;
    },
    isDispatcher: (state) => state.isAdmin,
    isDriver: (state) => state.isAdmin,
    getMessage: (state) => state.message,
    getToken: (state) => state.token,
    getUser: (state) => {
      let stateUser = state.user;
      if (Object.keys(stateUser).length === 0) {
        stateUser = cookies.get("user");
      }
      return JSON.parse(JSON.stringify(stateUser));
    },
  },
  actions: {
    authorized(context, token) {
      context.commit("token", token);
      cookies.set("token", token);
    },
    user(context, user) {
      let commitUser = JSON.stringify(user);
      if (commitUser.role === "dispatcher") {
        context.commit("dispatcher", true);
      }
      if (commitUser.role === "driver") {
        context.commit("driver", true);
      }
      context.commit("user", commitUser);
      cookies.set("user", commitUser);
    },
    message(context, message) {
      context.commit("message", message);
    },
    logout(context) {
      context.commit("token", "");
      context.commit("user", "");
      context.commit("message", "");
      context.commit("isAdmin", null);
      cookies.remove("token");
      cookies.remove("user");
    },
  },
};

export default auth;
