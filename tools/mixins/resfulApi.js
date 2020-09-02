import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["Getter_locale"])
  },
  methods: {
    // 呼叫API
    async CallApi(apiKey, params = null) {
      // call api
      const api = this.$api[apiKey];
      const res = params ? await api(params) : await api();
      const {
        status: { code, i18nMsg }
      } = res;
      console.log("api", res);
      // 資料驗證
      if (code === 0) return res;
      if (code !== 0) {
        this.$Message.error({
          content: `(${code}) ${this.$t(i18nMsg)}`,
          duration: 3
        });
        if (code === 21201) {
          setTimeout(() => {
            this.$router.push(`/${this.Getter_locale}/`); // token 異常，登出
          }, 1000);
        }
        return res;
      }
    }
  }
};
