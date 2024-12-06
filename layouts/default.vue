<template>
    <div class="default-layout">
      <nav-bar></nav-bar>
      <div class="body-content">
        <slot />
      </div>
      <my-footer></my-footer>
    </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import MyFooter from "~/components/MyFooter.vue";
import PrimarySection from "~/components/PrimarySection.vue";

export default {
  components: {
    NavBar,
    MyFooter,
    PrimarySection
  }
};
</script>
