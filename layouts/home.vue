<template>
  <div class="body-content">
    <!-- <section class="hero is-fullheight bg-img" id="header"> -->
    <particlesJS/>

    <section class="hero is-fullheight bg-img" id="header">
      <div class="hero-head">
        <nav-bar></nav-bar>
      </div>
      <div class="hero-body">
        <div class="typer-title">
          <h1 class="name-title">Julia Ebert</h1>
          <client-only>
            <vue-typer
              class="subtitle"
              id="does-things"
              :pre-type-delay="600"
              :type-delay="70"
              :pre-erase-delay="2000"
              erase-style="clear"
              :text="[
              'programs a swarm.',
              'builds robots.',
              'simulates satellites.',
              //'writes a blog.',
              'makes things.',
              '3D prints everything.']"
            ></vue-typer>
          </client-only>
        </div>
      </div>
      <div class="hero-footer has-text-centered">
        <i class="mdi mdi-chevron-down to-rest" v-scroll-to="'#main'"></i>
      </div>
    </section>
    <div id="main">
      <nuxt/>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import MyFooter from "~/components/MyFooter.vue";
import ParticlesJS from "~/components/ParticlesJS.vue";

// if (process.browser) {
//   require "~/plugins/particles."
// }

export default {
  components: {
    NavBar,
    MyFooter,
    ParticlesJS
  }
};
</script>

<style lang="scss">
</style>
