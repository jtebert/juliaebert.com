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

<script setup>
import { computed } from 'vue'
import slugify from "slugify"

const props = defineProps({
  texture: String,
  title: String,
  subtitle: String,
  icon: String
})

const slug = computed(() => {
  return slugify(props.title, { lower: true })
})

const iconSlug = computed(() => {
  if (props.icon) {
    return props.icon
  } else {
    return slug.value
  }
})

const textureClass = computed(() => {
  if (props.texture) {
    return "has-texture-" + props.texture
  } else {
    return ""
  }
})
</script>
