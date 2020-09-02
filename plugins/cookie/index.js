import Vue from "vue";
import * as cookies from "./fn.js";

Vue.prototype.$cookies = cookies;

export default ({ app }) => {
  app.$cookies = cookies;
};
