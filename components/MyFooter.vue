<template>
<footer class="footer has-text-light">
  <div class="container">
    <div class="columns">
      <div class="column is-2 has-text-centered">
        <img src="/imgs/logos/harvard-seas-logo-light-opt.svg" style="max-height: 125px;">
      </div>
      <div class="column content">
        <vue-markdown>
Julia Ebert

PhD Candidate in Computer Science

School of Engineering and Applied Sciences, Harvard University

4.101 Science and Engineering Complex
150 Western Ave
Boston, MA 02134

[julia@juliaebert.com](mailto:julia@juliaebert.com)
        </vue-markdown>
      </div>
      <div class="column">
        <vue-markdown class="content">
*Made by Julia Ebert with [Nuxt](https://nuxtjs.org/), [Vue.js](https://vuejs.org/), [Bulma](https://bulma.io/), [Hero Patterns](https://www.heropatterns.com/), and icons from [The Noun Project](https://thenounproject.com/) by Maxim Basinski and Eucalyp. Typeset in [Montserrat](https://fonts.google.com/specimen/Montserrat) and [Space Mono](https://fonts.google.com/specimen/Space+Mono).*

*Source code available on [GitHub](https://github.com/jtebert/juliaebert.com) under the [MIT license](https://github.com/jtebert/juliaebert.com/blob/master/LICENSE.txt).*
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
    VueMarkdown,
  },
};
</script>

<style lang="scss">
</style>
