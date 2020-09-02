import { getCookie } from "@/plugins/cookie/fn";
const basic = {
  method: "post",
  baseURL: "/api", // "/api", // process.env.baseUrl
  transformRequest: [
    (data, headers) => {
      headers["Content-Type"] = "application/json";
      headers["Authorization"] = getCookie("token")
        ? `Bearer ${getCookie("token")}`
        : "";
      return data;
    }
  ],
  headers: {
    "Content-Type": "multipart/form-data"
  },
  // 攜帶憑證
  withCredentials: false,
  // 返回資料型別
  responseType: "json"
};

// file form-data =======================================================================
const formData = {
  method: "post",
  baseURL: "/api",
  transformRequest: [
    function (data, headers) {
      headers["Content-Type"] = "multipart/form-data";
      headers["Authorization"] = getCookie("token")
        ? `Bearer ${getCookie("token")}`
        : "";
      return data;
    }
  ],
  // 攜帶憑證
  withCredentials: false
  // 返回資料型別
};

const config = {
  basic,
  formData
};

export default config;
