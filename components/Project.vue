<template>
<div :class="['project-section', 'scroll-section', {'is-alt': isAlt}]">
    <img class="section-image" :src=imgSrc>
    <div class="section-content">
        <h1 class="title is-4">{{ title }}</h1>
        <h4 class="subtitle is-6" v-if="subtitle">{{ subtitle }}</h4>

        <div class="content"><slot name="content"></slot></div>

        <div v-if="this.$slots.links"></div>

        <div v-if="this.$slots.results">
            <h3 class="results-title title is-5">Some Results</h3>
            <slot name="results"></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    title: String,
    subtitle: String,
    isAlt: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
