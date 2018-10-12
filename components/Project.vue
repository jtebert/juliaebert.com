<template>
<div :class="['project-section', 'scroll-section', {'no-image': imgless}]">
    <div v-if=isMockup class="section-image">
      <mockup :imgSrc=imgSrc
              :mobileImgSrc=mobileImgSrc></mockup>
    </div>
    <div v-else-if="isCover&&imgSrc" class="section-image is-cover">
      <img :src=imgSrc is-cover>
    </div>
    <div v-else-if=videoSrc :class="['section-image', {'is-cover': isCover}]">
      <video loop autoplay muted :class="{'is-cover': isCover}">
        <source :src=videoSrc type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <img v-else :class="['section-image', {'is-padded': isPadded}]" :src=imgSrc>

    <div class="section-content">
        <h1 class="title is-4">{{ title }}</h1>
        <h4 class="subtitle is-6" v-if="subtitle">{{ subtitle }}</h4>

        <div class="content"><slot></slot></div>

        <div v-if="this.$slots.links"></div>

        <div v-if="this.$slots.results">
            <h3 class="results-title title is-5">Some Results</h3>
            <slot name="results"></slot>
        </div>
    </div>
</div>
</template>

<script>
import Mockup from "~/components/Mockup.vue";

export default {
  props: {
    imgSrc: String,
    videoSrc: String,
    mobileImgSrc: String,
    title: String,
    subtitle: String,
    isMockup: { type: Boolean, default: false },
    isPadded: { type: Boolean, default: false },
    isCover: { type: Boolean, default: false }
  },
  computed: {
    imgless: function() {
      return !(this.imgSrc || this.videoSrc);
    }
  },
  components: {
    Mockup
  }
};
</script>
