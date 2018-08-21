<template>
<div class="columns">
  <div class="column is-5">
    <img :src=imgSrc>
  </div>
  <div class="column is-7">
    <slot name="content"></slot>
    <div>
        <h3 class="results-title title is-5">Selected Results:</h3>
        <slot name="results"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["imgSrc"]
};
</script>

<style lang="scss" scoped>
.title.results-title {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}
</style>
