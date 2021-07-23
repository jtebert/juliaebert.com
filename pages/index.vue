<template>
  <div>
    <primary-section
      title="About Me"
      subtitle="Julia Ebert, apprentice robot herder"
      texture="plus"
    >
      <div slot="links">
          <icon-button-link
            to="https://github.com/jtebert"
            icon="github-circle"
            title="GitHub"
          >GitHub</icon-button-link>
          <icon-button-link
            to="https://www.linkedin.com/in/jtebert/"
            icon="linkedin"
            title="LinkedIn"
          >LinkedIn</icon-button-link>
      </div>
      <gallery
        :img-srcs="[
      ['csgf-robots.jpg'],
      ['zero-g-rad.jpg', 'ZERO-G research flight', 'Stephen Boxall/ZERO-G'],
      //['project_night.jpg', 'Laser cutting a dishwasher sign at Project Night', 'Olivia Nie/SEAS Communications'],
      ['curling.jpg', '2017 college curling national championship (Harvard took 4th place!)'],
      //['march-for-science.jpg', '2017 Boston March for Science with SSR labmates'],
      ]"
      ></gallery>
      <div class="block-content content">
        <vue-markdown>
I am a PhD candidate in computer science at Harvard University, where I study collective robotics with Prof. Radhika Nagpal in the [Self-organizing Systems Research group](https://ssr.seas.harvard.edu/). During my PhD, I have been a [Siebel Scholar](https://www.siebelscholars.com/) and Department of Energy [Computational Science Graduate Fellow](https://www.krellinst.org/csgf/) (DOE CSGF), and I interned at Lawrence Livermore National Laboratory. Previously, I earned an MRes in Bioengineering at Imperial College London as a Marshall Scholar and a BS in Behavioral Neuroscience at Northeastern University.

I am interested in robotics, learning, biology, and the interface between them, such as bio-inspired robotics, cooperative robot control, artificial intelligence, and multi-agent systems. I also consider myself a full-stack roboticist, working on both software (algorithms and control) and hardware (mechanical and electronic design). This lets me consider mechanical and algorithmic co-design in developing robust robot collectives.

My current research focuses on creating algorithms for distributed decision-making in robot swarms. Specifically, I am developing a modular framework for allowing robots to collectively solve a variety of environmental classification and localization problems. I aim to take an interdisciplinary approach to collective robotics, integrating bio-inspiration and mathematical modeling to develop algorithms that can be applied beyond the lab. After my PhD, I plan to pursue a career in academic or industry research.

I am also excited about science communication and outreach – especially when it can be used to expand excitement and access to STEM for traditionally under-representend groups, including women and people of color. I've [spoken to hundreds of kids about robots](https://www.brainson.org/shows/2018/05/08/what-was-the-first-robot-and-more-from-robotstravaganza), given a [public lecture on robotics](http://sitn.hms.harvard.edu/seminars/2018/november-14-brains-bodies-make-smart-robots/) through Harvard's Science in the News lecture series, and demonstrated our lab's Kilobots at a variety of outreach events.
        </vue-markdown>
        <p>In my free time, I play for the
          <a href="http://harvardcurling.com/">Harvard curling team</a>, bake
          <a href="http://recklessham.com/">awesome cinnamon rolls</a>, and
          <nuxt-link to="side-projects">make fun things</nuxt-link>.
        </p>
        <vue-markdown>
## Recent News

**September 2020:** I've been selected as a [Siebel Scholar](https://www.siebelscholars.com/) for the [Class of 2021](https://www.siebelscholars.com/articles/welcome-class-of-2021-siebel-scholars/)!

**August 2020:** I presented my research at the 2020 DOE CSGF Annual Program Review. You can [watch the recording here](https://www.krellinst.org/csgf/conf/2020/video/ebert2016).

**May 2020:** My latest paper was published at ICRA 2020: "Bayes Bots: Collective Bayesian Decision-Making in Decentralized Robot Swarms." You can [read the preprint here](/pdfs/inproceedings/2020_icra.pdf) and [watch a recording of my talk here.](https://www.youtube.com/watch?v=cvDgHfGTbOQ)

**September 2019:** I just made [Kilosim](https://github.com/jtebert/kilosim) open source! Together with [Richard Barnes](http://rbarnes.org/), I've been developing this scalable, high performance simulator for Kilobot robots that makes it easy to transfer code between simulation and physical robots. Although it's still in pre-release, it has been used to simulate up to 10,000 robots at a time and conduct parameter sweeps covering almost a million trials.
        </vue-markdown>
      </div>
      <div class="block-content">
        <h1 class="title is-2 has-text-centered">See More</h1>
        <div class="has-flex-items">
          <!-- <image-block-link title="CV"></image-block-link> -->
          <image-block-link title="Resume" icon="cv"></image-block-link>
          <image-block-link title="Research"></image-block-link>
          <image-block-link title="Publications"></image-block-link>
          <image-block-link title="Side Projects"></image-block-link>
          <image-block-link title="Media"></image-block-link>
          <image-block-link title="Docs" link="https://docs.juliaebert.com"></image-block-link>
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
    ImageBlockLink,
  },
  layout: "home",
};
</script>

<style lang="scss">
</style>
