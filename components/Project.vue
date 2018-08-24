<template>
<div class="section" :class="{'is-white': imgAlign === 'left'}">
  <div class="columns project">
    <div class="column is-5" v-if="imgAlign === 'left'">
      <img :src=imgSrc>
    </div>

    <div class="column is-7">
      <h1>{{ title }}</h1>
      <h4 class="subtitle" v-if="subtitle">{{ subtitle }}</h4>
      <slot name="content"></slot>
      <div v-if="this.$slots.links">

      </div>
      <div v-if="this.$slots.results">
          <h3 class="results-title title is-4">Some Results</h3>
          <slot name="results"></slot>
      </div>
    </div>

    <div class="column is-5" v-if="imgAlign === 'right'">
      <img :src=imgSrc>
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
    imgAlign: {
      type: String,
      default: "left"
    }
  }
};
</script>

<style lang="scss">
.columns.project {
  margin: 0;
}
.title.results-title {
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}
</style>
