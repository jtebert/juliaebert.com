<template>
    <div :class="['hexagon', {'is-horizontal': isHorizontal}]"
        :style="{width: width+'px', height: height+'px'}">
        <div class="hexagon-in1">
            <div class="hexagon-in2"
                :style="{backgroundImage: 'url(' + imgSrc + ')' }"></div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    width: { type: Number },
    isHorizontal: { type: Boolean, default: false },
    imgSrc: { type: String }
  },
  computed: {
    height: function() {
      if (this.isHorizontal) {
        return this.width * 0.867;
      } else {
        return this.width * 1.155;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$width: 200px;

.hexagon {
  //   margin: 32px auto;
  margin: 0;
  overflow: hidden;
  visibility: hidden;
  -webkit-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  -o-transform: rotate(120deg);
  transform: rotate(120deg);
  //cursor: pointer;
  //width: $width; // vertical hex
  //height: $width * 1.155; // vertical hex
  &.is-horizontal {
    // width: $width;
    // height: $width * 0.867; // sqrt(3)/2
    .hexagon-in2 {
      //   background-size: $width * 0.65;
    }
  }
  //   &.is-vertical {
  //     width: $width;
  //     height: $width * 1.155;
  //     .hexagon-in2 {
  //       background-size: $width * 0.65 * 1.155;
  //     }
  //   }
  .hexagon-in1 {
    overflow: hidden;
    width: 100%;
    height: 100%;
    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }
  .hexagon-in2 {
    // background-size: $width * 0.65 * 1.155; // vertical hex
    background-size: cover;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    // background-image: url(https://juliaebert.com/assets/imgs/logos/circuit-logo-light.png);
    // background-color: red;
    visibility: visible;
    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    transform: rotate(-60deg);
    // &:hover {
    //   background-color: blue;
    // }
  }
}
</style>
