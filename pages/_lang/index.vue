<template lang="pug">
  #Home
    //- transition(name="component" mode="out-in")
    Slideshow(:images="images")
    .shop
      .semi-circle-btn
        p SHOP NOW !
</template>

<script>
import Slideshow from "@/components/common/Slideshow";
import mixinsLocale from "@/tools/mixins/locale";
export default {
  name: "Home",
  components: { Slideshow },
  mixins: [mixinsLocale],
  data() {
    return {
      images: [
        "https://storage.googleapis.com/csofans/imagesDemo/image1.jpg",
        "https://storage.googleapis.com/csofans/imagesDemo/image2.jpg",
        "https://storage.googleapis.com/csofans/imagesDemo/image3.jpg",
        "https://storage.googleapis.com/csofans/imagesDemo/image4.jpg"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#Home {
  // background: #aaa;
  .shop {
    @include flex;
    transform: translateY(-80px);
    .semi-circle-btn {
      cursor: pointer;
      border-radius: 160px 160px 0 0;
      height: 80px;
      width: 160px;
      background: #fff;
      box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
      transition: all 0.4s ease;
      @include flex;
      &:hover {
        box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
