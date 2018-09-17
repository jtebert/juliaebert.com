<template>
<div>

<primary-section title="About Me"
  subtitle="Julia Ebert, apprentice robot herder"
  texture="graph-paper">
  <div class="block-content content">
    <vue-markdown>
I am a PhD candidate in computer science at Harvard University. I am a member of the Self-organizing Systems Research group, where I study bio-inspired collective robotics with Prof. Radhika Nagpal. I am also a Department of Energy Computational Science Graduate Fellow (DOE CSGF).
    </vue-markdown>

    <p><a v-scroll-to="'#cv'">Read my full CV here.</a></p>

    <vue-markdown>
I am interested in biology, learning, robotics, and the interface between them, such as bio-inspired robotics, cooperative robot control, and artificial intelligence. During my PhD, my goal is to apply concepts from neuroscience and biological learning to improve the collective behavior of robots.

In the first years of my PhD, I developed an algorithm for a swarm of simple Kilobot robots to make decisions about multiple features of their environment, and I designed and built a set of larva-inspired robots that climb over each to move faster as a group. Now, I am developing methods to make it easier to create and understand complex swarm behavior -- imagine map reduce for robots.

I also care about science communication and outreach. I've spoken to hundreds of kids about robotics, and this fall I am giving a public talk on robotics through Harvard's Science in the News lecture series.

After my PhD, I plan to pursue a career in academic research.
    </vue-markdown>

  </div>
  <gallery
    :img-srcs="['march-for-science.jpg', 'self-csgf.jpg', 'curling.jpg']">
  </gallery>
</primary-section>

<primary-section title="CV"
  subtitle="Curriculum Vitae"
  texture="brick-wall">
  <div class="block-content content">
    <cv :isPaper="false"></cv>
  </div>
</primary-section>

<primary-section title="Research"
  subtitle="Robot swarms + humans + space = ???"
  texture="circuit-board">
  <research></research>
</primary-section>

<primary-section title="Publications"
  subtitle="Making the world a better place, one peer-reviewed article at a time"
  texture="bank-note">
  <div class="block-content content">
    <publications></publications>
  </div>
</primary-section>

<primary-section title="Projects" subtitle="I make a lot of mostly useless things."
  texture="hexagons">
  <programming></programming>
</primary-section>

<primary-section title="Media" subtitle="Shameless self-promotion"
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
