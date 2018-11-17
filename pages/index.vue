<template>
<div>

<primary-section title="About Me"
  subtitle="Julia Ebert, apprentice robot herder"
  texture="graph-paper">
  <div slot='links'>
    <p class="buttons">
      <icon-button-link to="https://github.com/jtebert" icon='github-circle' title="GitHub"></icon-button-link>
      <icon-button-link to="mailto:julia@juliaebert.com" icon="email" title="Email"></icon-button-link>
      <icon-button-link to="https://www.linkedin.com/in/ebertjulia/" icon="linkedin" title="LinkedIn"></icon-button-link>
    </p>
  </div>
  <div class="block-content content">
    <vue-markdown>
I am a PhD candidate in computer science at Harvard University. I am a member of the [Self-organizing Systems Research group](https://ssr.seas.harvard.edu/), where I study bio-inspired collective robotics with Prof. Radhika Nagpal. I am also a Department of Energy Computational Science Graduate Fellow (DOE CSGF). I previously earned an MRes in bioengineering from Imperial College London and a BS in behavioral neuroscience from Northeastern University.
    </vue-markdown>

    <p><a v-scroll-to="'#cv'">Read my full CV here.</a></p>

    <vue-markdown :html="true">
I am interested in biology, learning, robotics, and the interface between them, such as bio-inspired robotics, cooperative robot control, and artificial intelligence. During my PhD, my goal is to apply concepts from neuroscience and biological learning to improve the collective behavior of robots. After my PhD, I plan to pursue a career in academic research.

In the first years of my PhD, I developed an algorithm for a swarm of simple Kilobot robots to make decisions about multiple features of their environment, and I designed and built a set of larva-inspired robots that climb over each to move faster as a group.

I also care about science communication and outreach. I've [spoken to hundreds of kids about robots](https://www.brainson.org/shows/2018/05/08/what-was-the-first-robot-and-more-from-robotstravaganza), [given a public lecture](http://sitn.hms.harvard.edu/seminars/2018/november-14-brains-bodies-make-smart-robots/) on robotics through Harvard's Science in the News lecture series, and demonstrated our lab's Kilobots at a variety of outreach events.

In my free time, I play for the [Harvard curling team](http://harvardcurling.com/), bake [awesome cinnamon rolls](http://lazybaker.juliaebert.com/), and [make fun things](#side-projects).

    </vue-markdown>
  </div>
  <gallery
    :img-srcs="[
      'march-for-science.jpg',
      'curling.jpg',
      ['project_night_four_web.jpg', 'Olivia Nie/SEAS Communications']
      ]">
  </gallery>
</primary-section>

<primary-section title="CV"
  subtitle="Curriculum Vitae"
  texture="brick-wall">
  <div slot="links">
    <p class="buttons">
      <icon-button-link to="/pdfs/ebert-julia.cv.pdf" icon="file-pdf">View as PDF</icon-button-link>
    </p>
  </div>
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
  <div slot="links">
    <p class="buttons">
      <icon-button-link
        to="https://scholar.google.com/citations?user=dsoLpEQAAAAJ&hl=en"
        icon="school">Google Scholar</icon-button-link>
    </p>
  </div>
  <div class="block-content content">
    <publications></publications>
  </div>
</primary-section>

<primary-section title="Side Projects"
  subtitle="I make a lot of mostly useless things."
  texture="lines-in-motion">
  <div slot="links">
    <!-- <p class="buttons">
      <icon-button-link
        to="https://blog.juliaebert.com"
        icon="pencil">
        Blog
      </icon-button-link>
    </p> -->
    <p class="buttons">
      <icon-button-link
        to="http://fab.cba.mit.edu/classes/863.17/Harvard/people/julia-ebert/"
        icon="hammer">Julia Makes Things</icon-button-link>
    </p>
  </div>
  <side-projects></side-projects>
</primary-section>

<primary-section title="Media" subtitle="Shameless self-promotion"
  texture="plus">
  <media></media>
</primary-section>

</div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import PrimarySection from "~/components/PrimarySection.vue";
import Gallery from "~/components/Gallery.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";
import cv from "~/pages/cv.vue";
import research from "~/pages/research.vue";
import sideProjects from "~/pages/sideProjects.vue";
import publications from "~/pages/publications.vue";
import media from "~/pages/media.vue";

export default {
  components: {
    VueMarkdown,
    PrimarySection,
    Gallery,
    IconButtonLink,
    cv,
    research,
    sideProjects,
    publications,
    media
  },
  layout: "default"
};
</script>

<style lang="scss">
</style>
