<template>
<div class="section is-block" :class=textureClass :id=slug>
    <div class="container">
        <div class="section is-light is-small primary">
            <img class="icon-block" :src="'/imgs/icons/'+slug+'.svg'"/>
            <h1 class="title is-1">{{ title }}</h1>
            <h3 class="subtitle is-4" v-if="subtitle">{{ subtitle }}</h3>

            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>
import slugify from "slugify";

export default {
  props: ["texture", "title", "subtitle"],
  computed: {
    slug: function() {
      return slugify(this.title, { lower: true });
    },
    textureClass: function() {
      if (this.texture) {
        return "has-texture-" + this.texture;
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss">
.section.is-block {
  padding-top: 6rem;
  padding-bottom: 6rem;
}
</style>
