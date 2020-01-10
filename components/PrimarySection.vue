<template>
  <div class="section is-block" :class="textureClass" :id="slug">
    <div class="container">
      <img class="icon-block" :src="'/imgs/icons/'+slug+'.svg'">
      <div class="section is-light is-unpadded">
        <div class="block-content has-title">
          <div class="title-block">
            <div class="title-block-title">
              <h1 class="title is-1">{{ title }}</h1>
              <h3 class="section-subtitle subtitle is-4" v-if="subtitle">{{ subtitle }}</h3>
            </div>
            <div class="title-block-links">
              <p class="buttons">
                <slot name="links" class="title-block-links"></slot>
              </p>
            </div>
          </div>
          <div class="intro content" v-if="this.$slots.intro">
            <slot name="intro"></slot>
          </div>
        </div>
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
