<template>
  <div class="container has-text-centered">
    <h1 class="error-title" v-if="statusCode === 404">Page Not Found</h1>
    <h1 v-else class="error-title">Error</h1>
    <h3 class="subtitle is-3">
      <nuxt-link to="/">
        <i class="mdi mdi-arrow-left"></i>&nbsp;Go Home
      </nuxt-link>
    </h3>
    <p class="has-text-white">
      Alternatively, stick around this page and have some fun.<br>(Click or tap on the background and see what happens.)
    </p>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "simple",
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    }
  }
};
</script>