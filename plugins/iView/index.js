import Vue from "vue";
import iView, { locale } from "view-design";
import iviewLangZH from "view-design/dist/locale/zh-TW";
import iviewLangCN from "view-design/dist/locale/zh-CN";
import iviewLangEN from "view-design/dist/locale/en-US";

import "./iview-variables.less";
iviewLangZH.i.page.item = "筆";
iviewLangZH.i.page.items = "筆";
iviewLangZH.i.page.page = "筆/頁";

const message = {
  zh: iviewLangZH,
  cn: iviewLangCN,
  en: iviewLangEN
};

// iview UI
Vue.use(iView);
const ChangeLang = function (lang) {
  locale(message[lang]);
};

// Vue.prototype.$iview = { ChangeLang }; // insert to vue this

export default ({ app, params }) => {
  locale(message[params.lang]); // init
  app.iview = { ChangeLang }; // insert to middleware
};
