import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "./locales/zh";
import cn from "./locales/cn";
import en from "./locales/en";

// 多語系
Vue.use(VueI18n);
export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: "zh",
    messages: { zh, cn, en }
  });

  // app.i18n.path = link => {
  //   if (app.i18n.locale === app.i18n.fallbackLocale) {
  //     return `/${link}`;
  //   }
  //   return `/${app.i18n.locale}/${link}`;
  // };
};