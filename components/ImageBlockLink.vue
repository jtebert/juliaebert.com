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

<script>
import slugify from "slugify";

export default {
  props: ["title", "link", "icon"],
  computed: {
    slug: function() {
      return slugify(this.title, { lower: true });
    },
    icon_src: function() {
      if (this.icon) {
        return "/imgs/icons/" + this.icon + ".svg";
      } else {
        return "/imgs/icons/" + this.slug + ".svg";
      }
    }
  }
};
</script>