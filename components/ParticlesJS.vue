// Adapted from this Github issue: https://github.com/VincentGarreau/particles.js/issues/192#issuecomment-338865839

<template>
  <div id='particles-js'></div>
</template>

<script>
import particle_options from "~/assets/star-particles.json";

export default {
  name: "ParticlesJS",

  mounted() {
    require("particles.js");
    this.$nextTick(() => {
      this.initParticlesJS();
    });
  },

  methods: {
    initParticlesJS() {
      /* eslint-disable */
      particlesJS("particles-js", particle_options);
    }
  }
};
</script>

<style>
/* Your styles */
</style>