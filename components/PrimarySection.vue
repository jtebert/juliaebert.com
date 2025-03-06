<template>
  <div class="section is-block" :class="textureClass" :id="slug">
    <div class="container">
      <img class="icon-block" :src="'/imgs/icons/'+iconSlug+'.svg'">
      <div class="section is-light is-unpadded">
        <div class="block-content has-title">
          <div class="title-block">
            <div class="title-block-title">
              <h1 class="title is-1">{{ title }}</h1>
              <h3 v-if="subtitle" class="section-subtitle subtitle is-4" v-html="subtitle"/>
            </div>
            <div class="title-block-links">
              <div class="buttons">
                <slot name="links"/>
              </div>
            </div>
          </div>
          <div v-if="$slots.intro" class="intro content">
            <slot name="intro"/>
          </div>
        </div>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from "slugify";

export default {
  props: ["texture", "title", "subtitle", "icon"],
  computed: {
    slug: function () {
      return slugify(this.title, { lower: true });
    },
    iconSlug: function () {
      if (this.icon) {
        return this.icon;
      } else {
        return this.slug;
      }
    },
    textureClass: function () {
      if (this.texture) {
        return "has-texture-" + this.texture;
      } else {
        return "";
      }
    },
  },
};
</script>
