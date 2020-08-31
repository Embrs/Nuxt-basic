<template lang="pug">
  #FooterBar
    
    .contact-info
      .content
        h6 Service am 10:00 - pm 22:00
        .bottom-line
        h6
          a(href="tel:+886040000000") Tel 0800 888 888
        h6
    .contact-btn
      .semi-circle-btn
        p CONTACT ME!
    .contact-platform
      .content
        .slogan
          h2 Find US
          .bottom-line
          h5 read More
        .platform
          img(:src="imgFb")
          img(:src="imgIg")
          img(:src="imgLine")

</template>

<script>
import imgFb from "@/assets/platform/fb.png";
import imgIg from "@/assets/platform/ig.png";
import imgLine from "@/assets/platform/line.png";

export default {
  name: "FooterBar",
  data() {
    return {
      imgFb,
      imgIg,
      imgLine
    };
  }
};
</script>

<style lang="scss" scoped>
#FooterBar {
  @include size;
  color: $main_font_3;
  background: $main_bg_1;
  .contact-info {
    @include flex;
  }
  .contact-btn {
    display: flex;
    justify-content: center;
    .semi-circle-btn {
      cursor: pointer;
      border-radius: 0 0 160px 160px;
      height: 80px;
      width: 160px;
      background: $main_bg_4;
      color: #fff;
      @include flex;
    }
  }
  .contact-platform {
    @include flex;
    .content {
      .platform {
        width: 100%;
        img {
          @include size(35px);
          background: #000;
          border-radius: 5px;
        }
        img:not(:first-child) {
          margin-left: 30px;
        }
      }
    }
  }
}

.bottom-line {
  width: 100%;
  border-bottom: 1px solid $main_font_3;
}

a {
  color: $main_font_3;
  transition: 0.2 all linear;
  &:hover {
    color: $main_font_3;
    opacity: 0.8;
  }
}
@media only screen and (min-width: 577px) {
  #FooterBar {
    display: grid;
    grid-template-columns: minmax(200px, 350px) auto minmax(200px, 350px);
    .contact-info {
      grid-column: 1;
      .content {
        .bottom-line {
          display: none;
        }
      }
    }
    .contact-btn {
      grid-column: 2;
    }
    .contact-platform {
      grid-column: 3;
    }
  }
}
@media only screen and (max-width: 576px) {
  #FooterBar {
    display: grid;
    grid-template-rows: 80px auto auto;
    .contact-info {
      grid-row: 2;
    }
    .contact-btn {
      grid-row: 1;
    }
    .contact-platform {
      grid-row: 3;
      .content {
        .slogan {
          display: none;
        }
      }
    }
  }
}
</style>
