import axios from "axios";
import RCFconfig from "../config";

axios.defaults.baseURL = RCFconfig.baseURL;


export const setupAxiosInterceptors = () => {
  const onRequestSuccess = (request) => {
    const token = JSON.parse(localStorage.getItem("access_token"));
    
    return request;
  };

  const onResponseSuccess = (response) => response;

  const onResponseError = (err) => {
    const status = err.status || (err.response ? err.response.status : 0);
    if (status === 401) {
      console.log("==MSG===");
    } else if (status === 404) {
      //  window.location.href = "/notFound"
    }
    return Promise.reject(err);
  };

  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};