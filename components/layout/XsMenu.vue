<template lang="pug">
  #XsMenu
    .header
      nuxt-link.title(:to="GetLocalePath('/')" @click.native="CloseThis") TEST
    .menu
      nuxt-link.item(:to="GetLocalePath('/Buy')" @click.native="CloseThis") {{$t("header.howToBuy")}}
      nuxt-link.item(:to="GetLocalePath('/Sell')" @click.native="CloseThis") {{$t("header.howToSell")}}
    .close
      .btn(@click="CloseThis")
        p Close
        Icon.icon(type="ios-close")
</template>

<script>
import mixinsLocale from "@/tools/mixins/locale";
export default {
  name: "XsMenu",
  mixins: [mixinsLocale],
  methods: {
    GoPath(path) {
      this.ToPath(path);
      this.CloseThis();
    },
    CloseThis() {
      this.$emit("on-close");
    }
  }
};
</script>

<style lang="scss" scoped>
#XsMenu {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 30vh auto 30vh;
  color: #fff;
  .header {
    @include flex;
    .title {
      @include flex;
      grid-row: 1;
      font-size: 30px;
      font-weight: bold;
      color: $main_font_2;
    }
  }

  .menu {
    font-size: 18px;
    grid-row: 2;
    @include column;
    justify-content: space-around;
    .item {
      color: #fff;
      text-align: center;
      width: 60vw;
      padding: 20px 0;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
    }
  }
  .close {
    cursor: pointer;
    font-size: 20px;
    grid-row: 3;
    @include flex;
    .btn {
      @include flex;
      .icon {
        font-size: 30px;
        transform: translateY(2px);
      }
    }
  }
}
</style>
