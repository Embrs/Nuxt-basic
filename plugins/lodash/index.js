import Vue from "vue";
import {
  debounce,
  cloneDeep,
  uniq,
  union,
  uniqBy,
  reverse,
  last,
  sortBy
} from "lodash";

const $_ = { debounce, cloneDeep, uniq, union, uniqBy, reverse, last, sortBy };
Vue.prototype.$_ = $_;
