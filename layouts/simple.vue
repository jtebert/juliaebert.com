<template>
  <div class="simple-layout">
    <particlesJS/>

    <section class="hero bg-img is-fullheight" id="header">
      <div class="hero-head">
        <nav-bar></nav-bar>
      </div>
      <div class="hero-body">
        <nuxt/>
      </div>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import MyFooter from "~/components/MyFooter.vue";
import ParticlesJS from "~/components/ParticlesJS.vue";

export default {
  components: {
    NavBar,
    MyFooter,
    ParticlesJS
  }
};
</script>