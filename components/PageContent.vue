<template>
  <div class="page-content">
    <h1 class="title is-1">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>


<style lang="scss">
.page-content {
  background-color: $light;
  width: 100%;
  padding: 1.25rem 1.5rem;

  .intro {
    font-size: 1.2rem;
  }
}
</style>
