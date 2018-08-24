<template>
  <div class="page-content">
    <div class="section is-content">
      <h1 class="title is-1">{{ title }}</h1>
      <div class="intro">
        <slot name="intro"></slot>
      </div>
    </div>
    <div class="section is-content is-white content" v-if="hasSection">
      <slot name="content"></slot>
    </div>
    <div class="content" v-else>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    hasSection: { type: Boolean, default: true }
  }
};
</script>


<style lang="scss">
.page-content {
  background-color: $light;
  width: 100%;
  //padding: 1.25rem 1.5rem;

  .intro {
    font-size: 1.2rem;
  }
}
</style>
