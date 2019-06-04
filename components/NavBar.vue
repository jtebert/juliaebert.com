<template>
  <div
    class="navbar is-black is-transparent"
    role="navigation"
    aria-label="main navigation"
    id="top-nav"
  >
    <div class="container nav-container">
      <div class="navbar-brand">
        <nuxt-link to="/">
          <img src="/imgs/icons/about-me.svg" id="brand-icon" class="navbar-item">
        </nuxt-link>
        <a
          role="button"
          :class="['navbar-burger', {'is-active': isActive}]"
          aria-label="menu"
          aria-expanded="false"
          v-on:click="menuToggle"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div :class="['navbar-menu', {'is-active': isActive}]" id="navMenu">
        <div class="navbar-end">
          <nuxt-link
            v-for="(slug, name) in sectionNames"
            :key="slug"
            :to="'/'+slug"
            class="navbar-item"
          >{{ name }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from "slugify";

export default {
  props: {},
  data() {
    return {
      isActive: false,
      sectionNames: process.env.navItems
    };
  },
  methods: {
    menuToggle: function() {
      this.isActive = !this.isActive;
    }
  },
  watch: {
    $route: function() {
      // Close the menu when the route changes (aka switch pages)
      this.isActive = false;
    }
  }
};
</script>

<style lang="scss">
</style>
