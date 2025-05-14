<template>
  <div :class="['project-section', {'no-image': imgless}]" :id="slug">
    <div v-if="isMockup" class="section-image">
      <mockup :imgSrc="imgSrc" :mobileImgSrc="mobileImgSrc"></mockup>
    </div>
    <div v-else-if="isCover&&imgSrc" class="section-image is-cover">
      <img :src="imgSrc" is-cover>
    </div>
    <div v-else-if="videoSrc" :class="['section-image', {'is-cover': isCover}]">
      <video loop autoplay muted :class="{'is-cover': isCover}">
        <source :src="videoSrc" type="video/mp4">Your browser does not support the video tag.
      </video>
    </div>
    <img v-else :class="['section-image', {'is-padded': isPadded}]" :src="imgSrc">
    <div class="section-content">
      <h1 class="title is-4">{{ title }}</h1>
      <h4 class="subtitle is-6" v-if="subtitle">{{ subtitle }}</h4>
      <div class="content">
        <slot></slot>
      </div>
      <div v-if="$slots.links"/>
      <div v-if="$slots.results">
        <h3 class="results-title title is-5">Some Results</h3>
        <slot name="results"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Mockup from "~/components/Mockup.vue";
import slugify from "slugify";
import { computed, useSlots } from 'vue';

const props = defineProps({
  imgSrc: String,
  videoSrc: String,
  mobileImgSrc: String,
  title: String,
  subtitle: String,
  isMockup: { type: Boolean, default: false },
  isPadded: { type: Boolean, default: false },
  isCover: { type: Boolean, default: false }
});

const slots = useSlots();
const imgless = computed(() => !(props.imgSrc || props.videoSrc));
const slug = computed(() => slugify(props.title, { lower: true }));
</script>
