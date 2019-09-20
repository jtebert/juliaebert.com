<template>
  <div>
    <primary-section
      title="About Me"
      subtitle="Julia Ebert, apprentice robot herder"
      texture="graph-paper"
    >
      <div slot="links">
        <p class="buttons">
          <icon-button-link
            to="https://github.com/jtebert"
            icon="github-circle"
            title="GitHub"
          >GitHub</icon-button-link>
          <icon-button-link
            to="https://www.linkedin.com/in/ebertjulia/"
            icon="linkedin"
            title="LinkedIn"
          >LinkedIn</icon-button-link>
        </p>
      </div>
      <gallery
        :img-srcs="[
      ['csgf.jpg'],
      //['project_night.jpg', 'Laser cutting a dishwasher sign at Project Night', 'Olivia Nie/SEAS Communications'],
      ['curling.jpg', '2017 college curling national championship (Harvard took 4th place!)'],
      ['march-for-science.jpg', '2017 Boston March for Science with SSR labmates'],
      ]"
      ></gallery>
      <div class="block-content content">
        <vue-markdown>
I am a PhD candidate in computer science at Harvard University, where I study bio-inspired collective robotics with Prof. Radhika Nagpal in the [Self-organizing Systems Research group](https://ssr.seas.harvard.edu/). I am also a Department of Energy [Computational Science Graduate Fellow](https://www.krellinst.org/csgf/) (DOE CSGF). Previously, I earned an MRes in bioengineering from Imperial College London and a BS in behavioral neuroscience from Northeastern University.

I am interested in biology, learning, robotics, and the interface between them, such as bio-inspired robotics, cooperative robot control, and artificial intelligence. I also consider myself a full-stack roboticist, working on both hardware (mechanical and electronic design) and software (algorithms and control). This lets me consider mechanical and algorithmic co-design in developing robust robot collectives.

During my PhD, my goal is to apply concepts from neuroscience and biological behavior to improve the collective behavior of robots. In the first years of my PhD, I developed an algorithm for a swarm of simple Kilobot robots to make decisions about multiple features of their environment, and I designed and built a set of larva-inspired robots that climb over each to move faster as a group. Currently, I am developing a more general framework for Bayesian decision-making in robot collectives. After my PhD, I plan to pursue a career in academic research.

I also care about science communication and outreach. I've [spoken to hundreds of kids about robots](https://www.brainson.org/shows/2018/05/08/what-was-the-first-robot-and-more-from-robotstravaganza), [given a public lecture](http://sitn.hms.harvard.edu/seminars/2018/november-14-brains-bodies-make-smart-robots/) on robotics through Harvard's Science in the News lecture series, and demonstrated our lab's Kilobots at a variety of outreach events.
        </vue-markdown>
        <p>In my free time, I play for the
          <a href="http://harvardcurling.com/">Harvard curling team</a>, bake
          <a href="http://lazybaker.juliaebert.com/">awesome cinnamon rolls</a>, and
          <nuxt-link to="side-projects">make fun things</nuxt-link>.
        </p>
        <vue-markdown>

## Recent News

I just made [Kilosim](https://github.com/jtebert/kilosim) open source! Together with [Richard Barnes](http://rbarnes.org/), I've been developing this scalable, high performance simulator for Kilobot robots that makes it easy to transfer code between simulation and physical robots. Although it's still in pre-release, it has been used to simulate up to 10,000 robots at a time and conduct parameter sweeps covering almost a million trials.
        </vue-markdown>
      </div>
      <div class="block-content">
        <h1 class="title is-2 has-text-centered">See More</h1>
        <div class="has-flex-items">
          <image-block-link title="CV"></image-block-link>
          <image-block-link title="Research"></image-block-link>
          <image-block-link title="Publications"></image-block-link>
          <image-block-link title="Side Projects"></image-block-link>
          <image-block-link title="Media"></image-block-link>
        </div>
      </div>
      <div class="block-content">
        <h1 class="title is-2 has-text-centered">Contact Me</h1>
        <div class="buttons is-centered">
          <a class="button is-large is-primary" href="mailto:julia@juliaebert.com">julia@juliaebert.com</a>
        </div>
      </div>
    </primary-section>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import PrimarySection from "~/components/PrimarySection.vue";
import Gallery from "~/components/Gallery.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";
import ImageBlockLink from "~/components/ImageBlockLink.vue";

export default {
  components: {
    VueMarkdown,
    PrimarySection,
    Gallery,
    IconButtonLink,
    ImageBlockLink
  },
  layout: "home"
};
</script>

<style lang="scss">
</style>
