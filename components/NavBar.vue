<template>
  <div
    id="top-nav"
    class="navbar is-black is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container nav-container">
      <div class="navbar-brand">
        <nuxt-link to="/">
          <img id="brand-icon" src="/imgs/icons/about-me.svg" class="navbar-item is-screen-only">
        </nuxt-link>
        <a
          role="button"
          :class="['navbar-burger', {'is-active': isActive}]"
          aria-label="menu"
          aria-expanded="false"
          @click="menuToggle"
        >
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>
      <div id="navMenu" :class="['navbar-menu', {'is-active': isActive}]">
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

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRuntimeConfig } from 'nuxt/app'

const route = useRoute()
const config = useRuntimeConfig()

const isActive = ref(false)
const sectionNames = ref(config.public.navItems)

watch(route, () => {
  // Close the menu when the route changes (aka switch pages)
  isActive.value = false
})

function menuToggle() {
  isActive.value = !isActive.value
}
</script>

<style lang="scss">
</style>
