import Vue from "vue";
import * as cookie from "./fn.js";

Vue.prototype.$cookie = cookie;

export default ({ app }) => {
  app.$cookie = cookie;
};
