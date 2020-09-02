const Has = (object, key) =>
  object != null && Object.hasOwnProperty.call(object, key);

// 回傳成功
const SuccessRes = response => {
  // 基本框架驗證
  if (
    !Has(response, "data") ||
    !Has(response.data, "status") ||
    !Has(response.data.status, "code")
  ) {
    // 資料格式異常
    return {
      data: null,
      status: { code: 100001, i18nMsg: "NetworkErr.100001" }
    };
  }
  const { code } = response.data.status;
  // ok
  response.data.status.i18nMsg = `ApiErr.${code}`;
  return response.data;
};

// 回傳失敗
const ErrorRes = error => {
  if (error.response && error.response.status) {
    const code = Number(error.response.status);
    const i18nMsg = `NetworkErr.${code}`;
    return { data: null, status: { code, i18nMsg } };
  }
  // 未知異常
  return { data: null, status: { code: 100002, i18nMsg: "NetworkErr.100002" } };
};

export default {
  SuccessRes,
  ErrorRes
};
