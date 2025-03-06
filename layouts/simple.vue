<template>
  <div class="simple-layout">
    <particlesJS/>

    <section id="header" class="hero bg-img is-fullheight">
      <div class="hero-head">
        <nav-bar/>
      </div>
      <div class="hero-body">
        <slot />
      </div>
    </section>
    <my-footer/>
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