import ApiService from "./apiService";

class ApiEndpoint {
  constructor(apiModel, apiToken) {
    this.apiModel = apiModel || "";
    this.apiToken = apiToken || "";
    this.listStatusCodes = {
      OK: 200,
      NOT_FOUND: 404,
      NO_AUTH: 401,
      FORBIDDEN: 403,
      SERVER_ERROR: 501,
    };
  }

  endpoint(method, request) {
    let requestUrl =
      method === ""
        ? `/api/${this.apiModel}`
        : `/api/${this.apiModel}/${method}`;
    const getMethods = ["get", "list"];
    const postMethods = ["create", "login"];
    if (getMethods.includes(method)) {
      return ApiService(this.apiToken).get(requestUrl, request);
    } else if (postMethods.includes(method)) {
      return ApiService(this.apiToken).post(requestUrl, request);
    } else {
      return ApiService(this.apiToken).get(requestUrl, request);
    }
  }

  base(request) {
    return this.endpoint("", request);
  }

  list(request) {
    return this.endpoint("list", request);
  }

  create(request) {
    return this.endpoint("create", request);
  }

  update(request) {
    return this.endpoint("update", request);
  }

  get(request) {
    return this.endpoint("get", request);
  }

  getById(id, request) {
    return this.actionById(`${id}`, "get", request);
  }

  action(action, request) {
    console.log("action", action);
    console.log("request", request);
    return this.endpoint(action, request);
  }

  actionById(id, action, request) {
    return this.endpoint(`${id}/${action}`, request);
  }

  getStatusCode(status) {
    return this.listStatusCodes[status];
  }

  getRequestHeaders(authToken) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: authToken,
    };
  }
}

export default ApiEndpoint;
