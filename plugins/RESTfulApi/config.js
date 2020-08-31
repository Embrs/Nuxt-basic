const basic = {
  method: "post",
  baseURL: "/api", // "/api", // process.env.baseUrl
  transformRequest: [
    (data, headers) => {
      headers["Content-Type"] = "application/json";
      // headers["Authorization"] = localStorage.getObjectHash(window.token)
      //   ? `Bearer ${localStorage.getObjectHash(window.token).token}`
      //   : "";
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

// web socket ===============================================================================
const webSocket = {
  method: "post",
  baseURL: "/ws",
  transformRequest: [
    (data, headers) => {
      headers["Content-Type"] = "application/json";
      // headers["Authorization"] = localStorage.getObjectHash(window.token)
      //   ? `Bearer ${localStorage.getObjectHash(window.token).token}`
      //   : "";
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
const uploadFile = {
  method: "post",
  baseURL: "/api",
  transformRequest: [
    function (data, headers) {
      headers["Content-Type"] = "multipart/form-data";
      // headers["Authorization"] = localStorage.getObjectHash(window.token)
      //   ? `Bearer ${localStorage.getObjectHash(window.token).token}`
      //   : "";
      return data;
    }
  ],
  // 攜帶憑證
  withCredentials: false,
  // 返回資料型別
  responseType: "json"
};

const downloadFile = {
  method: "post",
  baseURL: "/api",
  transformRequest: [
    function (data, headers) {
      headers["Content-Type"] = "multipart/form-data";
      // headers["Authorization"] = localStorage.getObjectHash(window.token)
      //   ? `Bearer ${localStorage.getObjectHash(window.token).token}`
      //   : "";
      return data;
    }
  ],
  // 攜帶憑證
  withCredentials: false
};

const config = {
  basic,
  webSocket,
  uploadFile,
  downloadFile
};

export default config;
