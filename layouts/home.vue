<template>
  <div class="body-content">
    <!-- <section class="hero is-fullheight bg-img" id="header"> -->
    <particlesJS/>

    <section id="header" class="hero is-fullheight bg-img">
      <div class="hero-head">
        <nav-bar/>
      </div>
      <div class="hero-body">
        <div class="typer-title">
          <h1 class="name-title">Julia Ebert</h1>
          <client-only>
            <vue-typer
              id="does-things"
              class="subtitle"
              :pre-type-delay="600"
              :type-delay="70"
              :pre-erase-delay="2000"
              erase-style="clear"
              :text="[
                'builds robots.',
                'develops algorithms.',
                // 'programs a swarm.',
                'makes things.',
                //'3D prints everything.'
              ]"
            />
          </client-only>
        </div>
      </div>
      <div class="hero-footer has-text-centered">
        <!-- <i v-scroll-to="'#main'" class="mdi mdi-chevron-down to-rest"/> -->
        <i  class="mdi mdi-chevron-down to-rest"/>
      </div>
    </section>
    <div id="main">
      <slot />
    </div>
    <my-footer/>
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
    ParticlesJS,
  },
};
</script>

<style lang="scss">
</style>
