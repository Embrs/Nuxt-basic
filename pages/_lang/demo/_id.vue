<template lang="pug">
  .demoid
    p id is {{id}}
    pre {{result}}
    p {{$t("test.name", {name: "EMBRS""})}}
    Button(@click="ChangeLocale('en')") EN
    Button(@click="ChangeLocale('cn')") CH
    Button(@click="ToPath('/demo')") Back
    Button(@click="ApiSignIn") api test
</template>

<script>
// import axios from "axios";

import mixinsLocale from "@/tools/mixins/locale";
import mixinsAxiosDemo from "@/tools/mixins/axiosDemo";
import mixinsResfulApi from "@/tools/mixins/resfulApi";

export default {
  // 驗證
  validate({ params }) {
    return params.id === "aaa";
    // return /^\d+$/.test(params.id) // 數字
    // return new Promise((resolve) => setTimeout(() => resolve()))
  },
  middleware: "rbac",
  mixins: [mixinsLocale, mixinsAxiosDemo, mixinsResfulApi],
  data() {
    return {
      id: "",
      params: {
        email: "harry@axolotl.com.tw",
        password: "111111",
        invite: ""
      }
    };
  },
  mounted() {
    this.id = this.$router.history.current.params.id;
  },
  methods: {
    async ApiSignIn() {
      const {
        data,
        status: { code }
      } = await this.CallApi("SignIn", this.params);
      if (code === 0) {
        this.apires = data.token;
      }
    }
  }
};
</script>
