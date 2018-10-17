<template>
<div class="gallery">
  <div v-for="(imgSrc, id) in imgSrcs" class="img-holder"
      :key="`img-${id}`"
      :style="{ 'background-image': 'url(' + imgDir + '/' + img(imgSrc) + ')' }">
      <span v-if="caption(imgSrc)" class="caption-source">Olivia Nie/SEAS Communications</span>
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
    }
  }
};
</script>

<style lang="scss">
</style>
