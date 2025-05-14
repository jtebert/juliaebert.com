import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.use(Particles, {
    init: async (engine) => {
      try {
        await loadFull(engine);
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    }
  });
});