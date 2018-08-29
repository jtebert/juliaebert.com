<template>
<div>

<primary-section title="Who I Am" subtitle="Beep boop robots" texture="graph-paper">
  <div class=flexy>
      <div class="grid-img">
        <div class="image is-square">
          <img src="/imgs/self-csgf.jpg">
        </div>
      </div>
    <div class="grid-content">
      <p>
        I am a PhD candidate in computer science at Harvard University. I am a member of the Self-organizing Systems Research group, where I study bio-inspired collective robotics with Prof. Radhika Nagpal. I am also a Department of Energy Computational Science Graduate Fellow (DOE CSGF)
      </p>
    </div>
  </div>
</primary-section>

<primary-section title="CV" subtitle="Curriculum Vitae"
  texture="brick-wall">
  I did things.
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

export default {
  components: {
    VueMarkdown,
    PrimarySection
  },
  layout: "alt"
};
</script>

<style lang="scss">
</style>
