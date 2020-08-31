<template lang="pug">
  #HeaderBar
    header
      nuxt-link.logo(:to="GetLocalePath('/')") TEST
    nav.menu
      nuxt-link.item(:to="GetLocalePath('/Buy')") {{$t("header.howToBuy")}}
      nuxt-link.item.g-padding-left-20(:to="GetLocalePath('/Sell')") {{$t("header.howToSell")}}
    .xs-menu
      Icon(type="ios-menu" @click="showXsMenu=true")
      Drawer(v-model="showXsMenu" :width="100" :closable="false")
        XsMenu(@on-close="showXsMenu = false")
</template>

<script>
import XsMenu from "@/components/layout/XsMenu";
import mixinsLocale from "@/tools/mixins/locale";

export default {
  name: "HeaderBar",
  components: { XsMenu },
  mixins: [mixinsLocale],
  data() {
    return {
      showXsMenu: false
    };
  }
};
</script>

<style lang="scss" scoped>
#HeaderBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: $main_font_2;
  }
  nav {
    font-size: 14px;
    display: flex;
    .item {
      color: $main_font_2;
    }
  }
  .xs-menu {
    display: none;
  }
}

@media only screen and (max-width: 576px) {
  #HeaderBar {
    padding: 20px 25px 0 25px;
    .menu {
      display: none;
    }
    .xs-menu {
      display: block;
      font-size: 35px;
    }
  }
}

::v-deep .ivu-drawer-body {
  background: $main_bg_1;
}
</style>
