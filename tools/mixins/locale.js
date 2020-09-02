// 語系控制
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["Getter_locales", "Getter_locale"])
  },
  methods: {
    // 語系切換
    ChangeLocale(lang) {
      // path 目前完整路徑加參數
      let path = `${window.location.pathname}${window.location.search}`;
      for (const i in this.Getter_locales) {
        // path 存在語系且是不同語言
        if (
          path.includes(`/${this.Getter_locales[i]}/`) &&
          this.Getter_locales[i] !== lang
        ) {
          path = path.replace(`/${this.Getter_locales[i]}/`, `/${lang}/`);
          this.$router.push(path);
          return;
        }
      }
    },
    // 切換頁面
    ToPath(path) {
      this.$router.push(`/${this.Getter_locale}${path}`);
    },
    // 回首頁
    ToHome() {
      this.$router.push(`/${this.Getter_locale}/`);
    },
    // 取得目前路徑
    GetLocalePath(path) {
      return `/${this.Getter_locale}${path}`;
    }
  }
};
