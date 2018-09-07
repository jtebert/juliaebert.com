<template>
<footer class="footer has-text-light">
  <div class="container">
    <div class="columns">
      <div class="column content">
        <vue-markdown>
Julia Ebert

PhD Candidate in Computer Science

Harvard University

[julia@juliaebert.com](mailto:julia@juliaebert.com)
        </vue-markdown>
      </div>
      <div class="column">
        <vue-markdown>
*Made by Julia Ebert with [Nuxt](https://nuxtjs.org/), using [Vue.js](https://vuejs.org/), [Textures.js](https://riccardoscalco.it/textures/), [Bulma](https://bulma.io/) framework, icons by Maxim Basinski and Eucalyp. Typeset in [Space Mono](https://fonts.google.com/specimen/Space+Mono) and [Montserrat](https://fonts.google.com/specimen/Montserrat).*
        </vue-markdown>
      </div>
    </div>

  </div>
</footer>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  components: {
    VueMarkdown
  }
};
</script>

<style lang="scss">
</style>
