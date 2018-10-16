<template>
<div class="gallery">
  <div v-for="(imgSrc, id) in imgSrcs" class="img-holder"
      :key="`img-${id}`"
      :style="{ 'background-image': 'url(' + imgDir + '/' + imgSrc + ')' }">
      <span class="caption-source">Olivia Nie/SEAS Communications</span>
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
  }
};
</script>

<style lang="scss">
</style>
