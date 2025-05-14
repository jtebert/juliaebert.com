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

<script setup>
const props = defineProps({
  imgSrcs: Array,
  imgDir: {
    type: String,
    default: "/imgs"
  }
});

const img = (imgSrc) => {
  if (Array.isArray(imgSrc)) {
    return imgSrc[0];
  } else {
    return imgSrc;
  }
};

const caption = (imgSrc) => {
  if (Array.isArray(imgSrc)) {
    return imgSrc[1];
  }
};

const source = (imgSrc) => {
  if (Array.isArray(imgSrc)) {
    return imgSrc[2];
  }
};
</script>

<style lang="scss">
</style>
