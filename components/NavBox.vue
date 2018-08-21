<template>
  <ul id="nav-links" class="is-size-4">
    <li><nuxt-link to="/">
      Home &ensp;<span class="mdi mdi-home"></span>
    </nuxt-link></li>
    <li><nuxt-link to="/cv">
      CV &ensp;<span class="mdi mdi-file"></span>
    </nuxt-link></li>
    <li><nuxt-link to="/research">
      Research &ensp;<span class="mdi mdi-robot"></span>
    </nuxt-link></li>
    <li><nuxt-link to="/publications">
      Publications &ensp;<span class="mdi mdi-book"></span>
    </nuxt-link></li>
    <li><nuxt-link to="/programming">
      Programming &ensp;<span class="mdi mdi-code-tags"></span>
    </nuxt-link></li>
    <li><nuxt-link to="/media">
      Media &ensp;<span class="mdi mdi-newspaper"></span>
    </nuxt-link></li>
  </ul>
</template>

<style lang="scss">
#nav-links {
  font-family: $family-subtitle;
  // font-size: 1.75rem;
  text-align: right;
  a:hover {
    color: $light;
  }
}
</style>

<script>
export default {
  components: {}
};
</script>
