// 回傳成功
import i18n from "@/plugins/i18n";
import { Message } from "view-design";
// import netErrorCord from "@/plugins/RESTfulApi/ErrorCode/net";

const isTest = process.env.VUE_TEST_MODAL === "true";
const errorRes = { data: null, status: { code: null } };

const Has = (object, key) =>
  object != null && Object.hasOwnProperty.call(object, key);

// // 遮罩
const ShowMask = () => {
  // store.dispatch("Action_SetGlobalMask", true);
};

const CloseMask = () => {
  // store.dispatch("Action_SetGlobalMask", false);
};

const SuccessRes = response => {
  CloseMask(); // 關閉遮罩
  // 格式驗證
  if (
    !Has(response, "data") ||
    !Has(response.data, "status") ||
    !Has(response.data.status, "code")
  ) {
    return errorRes;
  }
  const { code } = response.data.status;
  // ok
  if (`${code}` === "0") return response.data;
  // error msg
  Message.error(i18n.tc(`err.${code}`));
  if (`${code}` === "21201" && !isTest) {
    setTimeout(() => {
      // window.location.href = "/"; // token 異常，登出
    }, 1000);
    return;
  }
  return response.data;
};

// 回傳失敗
const ErrorRes = error => {
  // CloseMask(); // 關閉遮罩
  console.log("err", error);
  // if (String(error.response.status) !== "200") {
  //   Message.error(i18n.tc(netErrorCord(error.response.status)));
  // }
  return errorRes;
};

export default {
  ShowMask,
  CloseMask,
  SuccessRes,
  ErrorRes
};
