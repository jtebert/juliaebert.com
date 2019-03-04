<template>
  <div class="gallery">
    <div
      v-for="(imgSrc, id) in imgSrcs"
      class="img-holder"
      :key="`img-${id}`"
      :style="{'background-image': 'url(' + imgDir + '/' + img(imgSrc) + ')' }"
    >
      <span v-if="source(imgSrc)" class="caption-source">{{ source(imgSrc) }}</span>
      <div v-if="caption(imgSrc)" class="overlay">
        <div class="text">{{ caption(imgSrc) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrcs: Array,
    imgDir: {
      type: String,
      default: "/imgs"
    }
  },
  methods: {
    img: function(imgSrc) {
      if (Array.isArray(imgSrc)) {
        return imgSrc[0];
      } else {
        return imgSrc;
      }
    },
    caption: function(imgSrc) {
      if (Array.isArray(imgSrc)) {
        return imgSrc[1];
      }
    },
    source: function(imgSrc) {
      if (Array.isArray(imgSrc)) {
        return imgSrc[2];
      }
    }
  }
};
</script>

<style lang="scss">
.gallery .img-holder {
  &:hover,
  &:active {
    .overlay {
      bottom: 0;
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
    position: absolute;
    bottom: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: 0.5s ease;
    .text {
      color: white;
      position: absolute;
      width: calc(100%-2em);
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
}
</style>
