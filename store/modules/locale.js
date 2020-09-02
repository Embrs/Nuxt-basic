import types from "../mutation-types";

// --------------------
export const state = () => ({
  locales: ["zh", "cn", "en"],
  locale: "zh"
});
// ----------------------------------------------------------------
export const mutations = {
  [types.SET_LANG](state, locale) {
    state.locale = locale;
  }
};

// ----------------------------------------------------------------
export const actions = {
  Action_locale({ commit }, locale) {
    commit(types.SET_LANG, locale);
  }
};

// ----------------------------------------------------------------
export const getters = {
  Getter_locales: state => state.locales,
  Getter_locale: state => state.locale
};
