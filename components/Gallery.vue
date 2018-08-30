<template>
<div class="gallery">
    <img v-for="(imgSrc, id) in imgSrcs"
    :key="`img-${id}`"
    :style="{ 'background-image': 'url(' + imgDir + '/' + imgSrc + ')' }">
</div>
<!-- :src="imgDir+'/'+imgSrc" -->

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
