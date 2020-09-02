<template lang="pug">
  #Layout
    HeaderBar
    main
      Nuxt
    footer(role="contentinfo")
      FooterBar
</template>

<script>
import HeaderBar from "@/components/layout/HeaderBar";
import FooterBar from "@/components/layout/FooterBar";
import mixinsPageLoading from "@/tools/mixins/pageLoading";
export default {
  name: "Layout",
  components: { HeaderBar, FooterBar },
  mixins: [mixinsPageLoading]
};
</script>

<style lang="scss">
@import "@/style/_layout.scss";

html {
  @extend %init;
  body {
    @include size;
    font-size: 16px;
    letter-spacing: 1.2px;
    #__nuxt,
    #__layout {
      min-width: 300px;
      min-height: 600px;
      @extend body;
    }
  }
}

#Layout {
  @include animation(2s, appear);
  overflow-x: hidden;
  @include size;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 80px auto 250px;
}

@media only screen and (max-width: 576px) {
  #Layout {
    grid-template-rows: 60px auto 350px;
  }
}
</style>
