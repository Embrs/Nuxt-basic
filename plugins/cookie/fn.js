import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/tools/js/CryptoJS";

const useHash = true;

// server header 攔截分解
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

// 刪除 cookie
export const removeCookie = function (key) {
  Cookies.remove(useHash ? encrypt(key) : key);
};

// string ------------------------------------------
// 取得 server cookie
export const getCookieInServer = function (key, req) {
  const cookieObj = headerCookieObj(req);
  return useHash ? decrypt(cookieObj[encrypt(key)]) : cookieObj[key];
};
// 取得 cookie
export const getCookie = function (key) {
  return useHash ? decrypt(Cookies.get(encrypt(key))) : Cookies.get(key);
};
// 設定 cookie
export const setCookie = function (key, value) {
  useHash ? Cookies.set(encrypt(key), encrypt(value)) : Cookies.set(key, value);
};

// object ------------------------------------------
// 取得 server cookie obj
export const getCookieObjectInServer = function (key, req) {
  const cookieObj = headerCookieObj(req);
  const value = useHash ? decrypt(cookieObj[encrypt(key)]) : cookieObj[key];
  return value.length > 0 ? JSON.parse(value) : "";
};
// 取得 cookie obj
export const getCookieObject = function (key) {
  const value = useHash ? decrypt(Cookies.get(encrypt(key))) : Cookies.get(key);
  return value.length > 0 ? JSON.parse(value) : "";
};
// 設定 cookie obj
export const setCookieObject = function (key, value) {
  const _value = JSON.stringify(value);
  useHash
    ? Cookies.set(encrypt(key), encrypt(_value))
    : Cookies.set(key, _value);
};

// ------------------------------------------------
export default {
  removeCookie,
  getCookieInServer,
  getCookie,
  setCookie,
  getCookieObjectInServer,
  getCookieObject,
  setCookieObject
};
