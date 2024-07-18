import store from "@/store";
/**
 * Authenticates the user sends them to the requested page, otherwise back to login
 * to: Route: the target Route Object being navigated to.
 * from: Route: the current route being navigated away from.
 * next: Function: this function must be called to resolve the hook
 * @param {*} to
 * @param {*} from
 * @param {*} next
 */
const requireAuth = (to, from, next) => {
  if (store.getters["auth/isAuthenticated"]) {
    store.dispatch("auth/user", store.getters["auth/getUser"]);
    next();
  } else {
    next({
      path: "/logout",
      query: {
        redirect: to.fullPath,
      },
    });
  }
};

/**
 * Checks that a user is authenticated and sends them to admin/client UI, otherwise displays requested page (Login, Register, Logout)
 * @param {*} to
 * @param {*} from
 * @param {*} next
 */
const notRequiredAuth = (to, from, next) => {
  if (store.getters["auth/isAuthenticated"]) {
    store.dispatch("auth/user", store.getters["auth/getUser"]);
    next({
      path: "/dashboard",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
};

export { notRequiredAuth, requireAuth };
