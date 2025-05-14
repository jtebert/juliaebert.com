<template>
  <div class="simple-layout">
    <particles/>
    <section id="header" class="hero is-fullheight">
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

<script setup>
import NavBar from "~/components/NavBar.vue";
import MyFooter from "~/components/MyFooter.vue";
import Particles from "~/components/Particles.vue";
</script>