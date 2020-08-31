import Vue from "vue";
import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/tools/js/CryptoJS";

const useHash = true;

const headerCookieObj = function (req) {
  const serviceCookie = {};
  if (req && req.headers && req.headers.cookie) {
    req.headers.cookie.split(";").forEach(function (val) {
      const parts = val.split("=");
      serviceCookie[parts[0].trim()] = (parts[1] || "").trim();
    });
  }
  return serviceCookie;
};

const removeCookie = function (key) {
  Cookies.remove(useHash ? encrypt(key) : key);
};

// string ------------------------------------------
const getCookieInServer = function (key, req) {
  const cookieObj = headerCookieObj(req);
  return useHash ? decrypt(cookieObj[encrypt(key)]) : cookieObj[key];
};

const getCookie = function (key) {
  return useHash ? decrypt(Cookies.get(encrypt(key))) : Cookies.get(key);
};

const setCookie = function (key, value) {
  useHash ? Cookies.set(encrypt(key), encrypt(value)) : Cookies.set(key, value);
};

// object ------------------------------------------
const getCookieObjectInServer = function (key, req) {
  const cookieObj = headerCookieObj(req);
  const value = useHash ? decrypt(cookieObj[encrypt(key)]) : cookieObj[key];
  return value.length > 0 ? JSON.parse(value) : "";
};

const getCookieObject = function (key) {
  const value = useHash ? decrypt(Cookies.get(encrypt(key))) : Cookies.get(key);
  return value.length > 0 ? JSON.parse(value) : "";
};

const setCookieObject = function (key, value) {
  const _value = JSON.stringify(value);
  useHash
    ? Cookies.set(encrypt(key), encrypt(_value))
    : Cookies.set(key, _value);
};

// ------------------------------------------------
const cookie = {
  removeCookie,
  getCookieInServer,
  getCookie,
  setCookie,
  getCookieObjectInServer,
  getCookieObject,
  setCookieObject
};

Vue.prototype.$cookie = cookie;

export default ({ app }) => {
  app.$cookie = cookie;
};
