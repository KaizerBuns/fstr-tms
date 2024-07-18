import axios from "axios";
/**
 * apiOpts {
 *  url: '', api url endpoint
 *  port: '', api port endpoint
 *  timeout: '' api timeout
 * }
 */
export default (apiToken) => {
  /**
   * returns our axios config settings
   */

  let config = {
    apiUrl: import.meta.env.VITE_APP_APIURL,
    apiPort: import.meta.env.VITE_APP_APIPORT,
  };

  /**
   * if you leave url/port empty it will use the
   * current domain/port as the endpoint
   */

  console.log("config", config);
  var myAxios = axios.create({
    baseURL:
      config.apiPort === ""
        ? `${config.apiUrl}`
        : `${config.apiUrl}:${config.apiPort}`,
    timeout: 20000, // 10 second timeout
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: apiToken || "",
    },
  });

  /**
   * Intercepts request, use to make global changes to the request
   */
  myAxios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  /**
   * Intercepts request, use to make global changes to the response
   */
  myAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 422)
      ) {
        window.location = "/#/expired";
      }
      return Promise.reject(error);
    }
  );

  myAxios.all = axios.all;
  myAxios.spread = axios.spread;

  return myAxios;
};
