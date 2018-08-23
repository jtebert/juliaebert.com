<template>
<div class="columns">
  <div class="column is-5">
    <img :src=imgSrc>
  </div>
  <div class="column is-7">
    <h2 class="title">{{ title }}</h2>
    <h4 class="subtitle" v-if="subtitle">{{ subtitle }}</h4>
    <slot name="content"></slot>
    <div v-if="this.$slots.results">
        <h3 class="results-title subtitle is-4">Some Results</h3>
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
    subtitle: String
  }
};
</script>

<style lang="scss" scoped>
.subtitle.results-title {
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}
</style>
