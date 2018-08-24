<template>
  <div class="nav-links is-size-4">
    <nuxt-link to="/">
      Home &ensp;<span class="mdi mdi-home"></span>
    </nuxt-link>
    <nuxt-link to="/cv">
      CV &ensp;<span class="mdi mdi-file"></span>
    </nuxt-link>
    <nuxt-link to="/research">
      Research &ensp;<span class="mdi mdi-robot"></span>
    </nuxt-link>
    <nuxt-link to="/publications">
      Publications &ensp;<span class="mdi mdi-book"></span>
    </nuxt-link>
    <nuxt-link to="/programming">
      Programming &ensp;<span class="mdi mdi-code-tags"></span>
    </nuxt-link>
    <nuxt-link to="/media">
      Media &ensp;<span class="mdi mdi-newspaper"></span>
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.nav-links {
  font-family: $family-subtitle;
  // font-size: 1.75rem;
  text-align: right;
  a {
    padding-right: $column-gap;
    display: block;
    &:hover {
      background-color: $primary;
      color: $light;
    }
  }
}
</style>

<script>
export default {
  components: {}
};
</script>
