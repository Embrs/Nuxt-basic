import Vue from "vue";
import { modules } from "@/tools/js/RESTfulApi-register";

Vue.prototype.$api = modules;
