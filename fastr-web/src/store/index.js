import { createStore } from "vuex";

// local store
import app from "./app";
import auth from "./auth";

export default createStore({
  modules: {
    app,
    auth,
  },
});
