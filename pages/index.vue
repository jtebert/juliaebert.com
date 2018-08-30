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
</primary-section>

<primary-section title="Research" subtitle="Robots and Satellites and Humans"
  texture="circuit-board">
  I did things.
</primary-section>

<primary-section title="Publications"
  texture="bank-note">
  I wrote things.
</primary-section>

<primary-section title="Projects" subtitle="I make a lot of mostly useless things."
  texture="hexagons">
Hello, world
</primary-section>

<primary-section title="Media" subtitle="It's an ego boost"
  texture="diagonal-lines">
  I did things.
</primary-section>



</div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import PrimarySection from "~/components/PrimarySection.vue";
import Gallery from "~/components/Gallery.vue";

export default {
  components: {
    VueMarkdown,
    PrimarySection,
    Gallery
  },
  layout: "alt"
};
</script>

<style lang="scss">
</style>
