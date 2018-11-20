<template>
  <nuxt-link class="img-button" :to="'/'+slug">
    <img :src="'/imgs/icons/'+slug+'.svg'">
    <h2 class="title">{{ title }}</h2>
  </nuxt-link>
</template>

<script>
import slugify from "slugify";

export default {
  props: ["title"],
  computed: {
    slug: function() {
      return slugify(this.title, { lower: true });
    }
  }
};
</script>