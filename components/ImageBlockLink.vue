<template>
  <a v-if="link" class="img-button" :href=link>
    <img :src="icon_src">
    <h2 class="title">{{ title }}</h2>
  </a>
  <nuxt-link class="img-button" :to="'/'+slug" v-else>
    <img :src="icon_src">
    <h2 class="title">{{ title }}</h2>
  </nuxt-link>
</template>

<script setup>
import slugify from "slugify";
import { computed } from "vue";

const props = defineProps({
  title: String,
  link: String,
  icon: String
});

const slug = computed(() => slugify(props.title, { lower: true }));
const icon_src = computed(() => {
  if (props.icon) {
    return "/imgs/icons/" + props.icon + ".svg";
  } else {
    return "/imgs/icons/" + slug.value + ".svg";
  }
});
</script>
