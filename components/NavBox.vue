<template>

<div class="column is-narrow">
  <div  id="nav-box">
    <ul id="nav-links" class="is-size-4">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/cv">CV</nuxt-link></li>
      <li><nuxt-link to="/research">Research</nuxt-link></li>
      <li><nuxt-link to="/publications">Publications</nuxt-link></li>
      <li><nuxt-link to="/programming">Programming</nuxt-link></li>
      <li><nuxt-link to="/media">Media</nuxt-link></li>
    </ul>
  </div>
</div>
</template>

<style lang="scss">
#nav-box {
  // padding: 0.25rem 1.5rem;
  padding: 0;
}
#nav-links {
  font-family: $family-subtitle;
  // font-size: 1.75rem;
  text-align: right;
  a:hover {
    color: $white;
  }
}
</style>

<script>
export default {
  components: {}
};
</script>
