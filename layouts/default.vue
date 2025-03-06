<template>
    <div class="default-layout">
      <nav-bar/>
      <div class="body-content">
        <slot />
      </div>
      <my-footer/>
    </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import MyFooter from "~/components/MyFooter.vue";

export default {
  components: {
    NavBar,
    MyFooter,
  }
};
</script>
