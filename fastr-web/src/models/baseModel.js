import store from "@/store";
import ApiEndpoint from "@/libs/apiEndpoint";

class BaseModel {
  /**
   * Setup global class variables
   * @param {*} apiModel required

   * @param {*} authToken required
   */
  constructor(apiModel) {
    const authToken = store.getters["auth/getToken"] || "";
    console.log("authToken", authToken);
    this.apiEndpoint = new ApiEndpoint(apiModel, authToken);
  }

  list() {
    return this.apiEndpoint.list();
  }

  get() {
    return this.apiEndpoint.get();
  }

  getById(id) {
    return this.apiEndpoint.getById(id);
  }

  create(postData) {
    return this.apiEndpoint.create(postData);
  }

  update(postData) {
    return this.apiEndpoint.update(postData);
  }
}

export default BaseModel;
