<template>
<div>
<section class="hero is-fullheight bg-img scroll-section" id="header">
<div class="hero-head">
    <nav-bar></nav-bar>
  </div>

    <div class="hero-body">
      <div class="typer-title">
        <h1 class="name-title">Julia Ebert</h1>
        <vue-typer class="subtitle" id="does-things"
            :pre-type-delay='600'
            :type-delay='70'
            :pre-erase-delay='2000'
            erase-style="clear"
            :text="[
                'programs a swarm.',
                'builds robots.',
                'simulates satellites.',
                'writes a blog.',
                'makes things.']">
        </vue-typer>
      </div>
    </div>
    <div class="hero-footer has-text-centered">
      <div class="container">
        <i class="mdi mdi-chevron-down to-rest"
            v-scroll-to="'#stuff'"></i>
      </div>
    </div>
</section>

<nuxt/>

</div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
</style>
