import axios from "axios";
import { ToQuerystr } from "@/plugins/utils";
import fn from "@/plugins/RESTfulApi/fn";
import config from "@/plugins/RESTfulApi/config";

const axiosIns = axios.create(config.basic);

// 回傳攔截
axiosIns.interceptors.response.use(
  response => fn.SuccessRes(response),
  error => fn.ErrorRes(error)
);

// ==============================================================================
/**
 * Get method
 * @param { string } uri
 * @param { Object } Params
 * @param { Object } headers
 */
const Get = (uri, Params, useMask = false, headers) => {
  if (useMask) {
    fn.ShowMask();
  }
  return new Promise(resolve => {
    axiosIns
      .get(uri + ToQuerystr(Params), { headers })
      .then(response => resolve(response));
  });
};
// -----------------------
/**
 * Post method
 * @param { string } uri
 * @param { Object } Params
 * @param { boolean } useMask
 * @param { Object } headers
 */
const Post = (uri, Params, useMask = false, headers) => {
  if (useMask) {
    fn.ShowMask();
  }
  return new Promise(resolve => {
    axiosIns
      .post(uri, JSON.stringify(Params), { headers })
      .then(response => resolve(response));
  });
};
// -----------------------
/**
 * Delete method
 * @param { string } uri
 * @param { Object } Params
 * @param { boolean } useMask
 * @param { Object } headers
 */
const Put = (uri, Params, useMask = true, headers) => {
  if (useMask) {
    fn.ShowMask();
  }
  return new Promise(resolve => {
    axiosIns
      .put(uri, JSON.stringify(Params), { headers })
      .then(response => resolve(response));
  });
};
// -----------------------
/**
 * Delete method
 * @param { string } uri
 * @param { Object } Params
 * @param { boolean } useMask
 * @param { Object } headers
 */
const Delete = (uri, useMask = true, headers) => {
  if (useMask) {
    fn.ShowMask();
  }
  return new Promise(resolve => {
    axiosIns.delete(uri, { headers }).then(response => resolve(response));
  });
};

export { Get, Post, Put, Delete };
