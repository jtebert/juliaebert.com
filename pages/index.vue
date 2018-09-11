<template>
<div>

<primary-section title="Who I Am" subtitle="Beep boop robots" texture="graph-paper">
  <div class="block-content content">
    <p>
      I am a PhD candidate in computer science at Harvard University. I am a member of the Self-organizing Systems Research group, where I study bio-inspired collective robotics with Prof. Radhika Nagpal. I am also a Department of Energy Computational Science Graduate Fellow (DOE CSGF).
    </p>
  </div>
  <gallery
    :img-srcs="['march-for-science.jpg', 'self-csgf.jpg', 'curling.jpg']">
  </gallery>
</primary-section>

<primary-section title="CV" subtitle="Curriculum Vitae"
  texture="brick-wall">
  <div class="block-content content">
    <cv :isPaper="false"></cv>
  </div>
</primary-section>

<primary-section title="Research" subtitle="Robots and Satellites and Humans"
  texture="circuit-board">
  <research></research>
</primary-section>

<primary-section title="Publications" subtitle="I wrote things (with other people, of course)"
  texture="bank-note">
  <div class="block-content content">
    <publications></publications>
  </div>
</primary-section>

<primary-section title="Projects" subtitle="I make a lot of mostly useless things."
  texture="hexagons">
  <programming></programming>
</primary-section>

<primary-section title="Media" subtitle="It's an ego boost"
  texture="diagonal-lines">
  <media></media>
</primary-section>



</div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import PrimarySection from "~/components/PrimarySection.vue";
import Gallery from "~/components/Gallery.vue";
import cv from "~/pages/cv.vue";
import research from "~/pages/research.vue";
import programming from "~/pages/programming.vue";
import publications from "~/pages/publications.vue";
import media from "~/pages/media.vue";

export default {
  components: {
    VueMarkdown,
    PrimarySection,
    Gallery,
    cv,
    research,
    programming,
    publications,
    media
  },
  layout: "alt"
};
</script>

<style lang="scss">
</style>
