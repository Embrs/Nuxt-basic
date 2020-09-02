<template lang="pug">
  #Slideshow(:style="styleSlideshowRange")
    .slot-item(v-for="(item, index) in images" :key="index" @click="AddPlayIndex")
      //- use component transition in scss
      transition(name="component" mode="out-in")
        img.image(v-if="index===playIndex" :src="item")
</template>

<script>
import { debounce } from "lodash";
export default {
  name: "Slideshow",
  props: {
    images: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: () => "100vw"
    },
    height: {
      type: String,
      default: () => "50vw"
    },
    playGap: {
      type: Number,
      default: () => 6000
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      playIndex: 0,
      currentWidth: 0
    };
  },
  computed: {
    styleSlideshowRange() {
      return {
        width: this.width,
        height: this.height
      };
    }
  },
  mounted() {
    if (this.autoPlay) {
      this.PlayInterval = setInterval(() => {
        this.AddPlayIndex();
      }, this.playGap);
    }
  },
  beforeDestroy() {
    if (this.autoPlay) {
      clearInterval(this.PlayInterval);
    }
  },
  methods: {
    AddPlayIndex: debounce(function () {
      if (this.images.length > 0 && this.images[this.playIndex + 1]) {
        this.playIndex++;
      } else {
        this.playIndex = 0;
      }
    }, 300)
  }
};
</script>

<style lang="scss" scoped>
#Slideshow {
  background: #eee;
  position: relative;
  overflow: hidden;
  .slot-item {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .image {
      width: 100%;
      @include animation(25s, fadezoom);
    }
  }
}
@media only screen and (max-width: 576px) {
  #Slideshow {
    height: 100vh !important;
    .slot-item {
      .image {
        width: auto !important;
        height: 100%;
      }
    }
  }
}
</style>
