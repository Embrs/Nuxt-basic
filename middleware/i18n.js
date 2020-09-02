export default function ({ app, store, params, redirect }) {
  // 目前語系
  if (store.state.locales.includes(params.lang)) {
    store.commit("SET_LANG", params.lang); // store 設定
    app.iview.ChangeLang(params.lang); // iview 語系切換
    app.i18n.locale = store.state.locale; // i18n 語系切換
    return;
  }
  // store.commit("SET_LANG", store.state.locale);
  // app.i18n.locale = store.state.locale;
  return redirect(`/${store.state.locale}/`); // 重新導向
}
