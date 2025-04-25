<template>
  <div class="particles-wrapper" :class="{ 'fade-in': particlesLoaded }">
    <client-only>
      <vue-particles
          id="tsparticles"
          @particlesLoaded="handleParticlesLoaded"
          :options="particlesConfig"
      />
    </client-only>
  </div>
</template>

<script setup>
import particlesConfig from "~/assets/network-particles.json";
import { ref, nextTick } from 'vue';

const particlesLoaded = ref(false);

const handleParticlesLoaded = async (container) => {
  console.log("Particles container loaded:", container);
  await nextTick();
  particlesLoaded.value = true;
};
</script>

<style>
.particles-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
}

.particles-wrapper.fade-in {
  opacity: 1;
  pointer-events: auto;
}

#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>