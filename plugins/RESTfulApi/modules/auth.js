import { Post } from "../instance";
import router from "../router";

const isTest = process.env.VUE_APP_TEST === "true";

const testRes = {
  data: {},
  status: {
    code: 0,
    msg: "success",
    unix: 0
  }
};

// 帳號 -----------------------------------------------------------
/** 登入
 * @param { string } email
 * @param { string } password
 */
export const SignIn = param => {
  if (isTest) return testRes;
  return Post(router.SIGNIN, param);
};
