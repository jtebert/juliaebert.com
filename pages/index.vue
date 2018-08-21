<template>
<div class="grid">
        <!-- <div class="square"><div class="square-content img">
            <img src="~/assets/imgs/self-csgf.jpg">
        </div></div> -->

        <!-- <div class="square-wrapper">
            <div class="square-padder"></div>
            <div class="square-content img">
                <img src="~/assets/imgs/self-csgf.jpg">
            </div>
        </div> -->

        <square-tile type="img" :img-src="require('~/assets/imgs/self-csgf.jpg')"></square-tile>

        <square-tile title="About">
          <p>I am a PhD candidate in computer science at Harvard University
          studying bio-inspired swarm robotics with Prof. Radhika Nagpal. I also
          hold an MRes in bioengineering and a BS in behavioral neuroscience.</p>
        </square-tile>

        <square-tile title="Goals">
          <p>During my PhD, my goal is to apply concepts from neuroscience and
          biological learning to improve collective behavior of robots. After my
          PhD, I intend to pursue a career in academic research.</p>
        </square-tile>

        <square-tile title="Interests">
          <p>I am interested in biology, learning, robotics, and the interface
          between them, such as bio-inspired robotics, cooperative robot
          control, and artificial intelligence. I also enjoy <a href="http://harvardcurling.com">curling</a> and <a href="http://lazybaker.juliaebert.com/recipes/cinnamon-rolls">baking
          cinammon rolls</a>.</p>
        </square-tile>

        <square-tile type="img"
          :img-src="require('~/assets/imgs/logos/harvard-seas-logo-light.svg')"></square-tile>

        <square-tile type="links"
        title="Links">
            <a href="https://github.com/jtebert">
              <i class="mdi mdi-github-circle"></i>
              GitHub
            </a>
            <a href="https://linkedin.com/in/ebertjulia">
              <i class="mdi mdi-linkedin"></i>
              Linkedin
            </a>
            <a href="https://ssr.seas.harvard.edu">
              <i class="mdi mdi-robot"></i>
              Self-Organizing Systems Research
            </a>
            <a href="mailto:julia@juliaebert.com">
              <i class="mdi mdi-email"></i>
              Contact Me
            </a>
        </square-tile>

        <square-tile type="link"
        :target="'http://fab.cba.mit.edu/classes/863.17/Harvard/people/julia-ebert/'"
        title="Projects"
        subtitle="How To Make (Almost) Anything">
          <p>Check out the projects I made in this MIT digital fabrication class.</p>
        </square-tile>

        <square-tile type="img"
          :img-src="require('~/assets/imgs/research/kilobots2.jpg')"></square-tile>

        <square-tile type="link"
        :target="'https://www.brainson.org/shows/2018/05/08/what-was-the-first-robot-and-more-from-robotstravaganza'"
        title="Podcast"
        subtitle="Brains On! Robotstravaganza">
          <p>I was a guest in a live science show for kids, talking about bio-inspired robotics and showing off my LARVAbots.</p>
        </square-tile>
      </div>

</template>

<script>
import SquareTile from "~/components/SquareTile.vue";
export default {
  components: {
    SquareTile,
  }
};
</script>

<style lang="scss">
.title {
  // color: $link;
}
</style>

