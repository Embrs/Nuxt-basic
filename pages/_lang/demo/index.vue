<template lang="pug">
  #Demo(:class="{'ddd':ready, 'ccc':ready}")
    .box
      .button Test
      p {{Getter_locale}}
      p {{$t("test.name", {name: "悶悶"})}}
      DatePicker(type="date" placeholder="Select date" style="width: 200px")
      h1.title nuxt-basic
      .links
        Button(@click="ChangeLocale('zh')") zh
        Button(@click="ChangeLocale('cn')") cn
        Button(@click="ChangeLocale('en')") en
        Button(@click="ToPath('/demo/aaa')") go demo
        H1
          nuxt-link(:to="GetLocalePath('/demo/aaa')") to demo
    .g-btn-1 aaaa
</template>

<script>
import mixinsLocale from "@/tools/mixins/locale";
export default {
  name: "Demo",
  mixins: [mixinsLocale],
  data() {
    return {
      ready: false
    };
  },
  mounted() {
    this.ready = true;
  }
};
</script>

<style lang="scss" scoped>
.ddd {
  background: #aaa;
}
.ccc {
  // font-size: 30px;
}
#Demo {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .button {
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    width: 100px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background: #eee;
    user-select: none;
    transition: all 2s ease;
    &:active {
      // background: #666;
      animation: 2s btnan;
    }
  }
  .links {
    padding-top: 15px;
  }
}
</style>
