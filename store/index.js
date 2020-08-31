import { modules } from "@/tools/js/store-register";
// import * as lang from "./modules/locale";

export const state = () => ({
  ...modules.state
});

export const mutations = {
  ...modules.mutations
};

export const actions = {
  ...modules.actions
};

export const getters = {
  ...modules.getters
};
