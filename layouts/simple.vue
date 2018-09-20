<template>
<div class="simple-layout">
  <section class="hero bg-img is-large scroll-section" id="header">
    <div class="hero-head">
      <nav-bar :isOtherPage="true"></nav-bar>
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
import BoxNavBar from "~/components/BoxNavBar.vue";
import MyFooter from "~/components/MyFooter.vue";

export default {
  components: {
    NavBar,
    MyFooter
  }
};
</script>