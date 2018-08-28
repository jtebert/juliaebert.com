<template>
<div :class="['section', 'is-unpadded', 'scroll-section', {'is-alt': isAlt}]">
    <div class="section-image">
        <img :src=imgSrc>
    </div>
    <div class="section-content">
        <h1 class="title is-1">{{ title }}</h1>
        <h4 class="subtitle" v-if="subtitle">{{ subtitle }}</h4>

        <div class="content"><slot name="content"></slot></div>

        <div v-if="this.$slots.links"></div>

        <div v-if="this.$slots.results">
            <h3 class="results-title title is-4">Some Results</h3>
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
.section.is-unpadded {
  padding: 0;
  display: flex;
  flex-direction: row;
  &.is-alt {
    flex-direction: row-reverse;
    background-color: $black-ter;
  }
  @include mobile {
    flex-direction: column;
  }
  .section-image {
    width: 40%;
    position: relative;
    img {
      object-fit: cover;
      object-position: center center;
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
  }
  .section-content {
    width: 60%;
    padding: 5rem;
    color: $text;
    .title.results-title {
      margin-top: 1.25rem;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
