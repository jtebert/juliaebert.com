<template>
  <div>
    <primary-section
      title="About Me"
      subtitle='Julia Ebert, <span class="strikethrough">apprentice</span> robot herder, PhD'
      texture="plus"
    >
      <div slot="links">
          <icon-button-link
            to="https://github.com/jtebert"
            icon="github"
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
      ['curling.jpg', 'College curling national championship (Harvard took 4th place!)'],
      //['march-for-science.jpg', '2017 Boston March for Science with SSR labmates'],
      ]"
      ></gallery>
      <div class="block-content content">
        <vue-markdown>

I am a roboticist and software engineer with a particular interest in autonomy for collective robotics. I am currently Autonomy Lead at [Fleet Robotics](https://www.fleetrobotics.ai/), where I'm leading the development of autonomy software for robots that clean ship hulls. Previously, I developed multi-robot planning algorithms for autonomous trucks at [Outrider](https://www.outrider.ai/).

I completed my PhD in computer science at Harvard University, where I developed algorithms for a variety of multi-agent systems, from robots to satellite constellations. I aim to take an interdisciplinary approach to collective robotics, integrating bio-inspiration and mathematical modeling to develop algorithms that can be applied beyond the lab.

I am interested in bio-inspired robotics, autonomous vehicles, and multi-agent systems. I also consider myself a full-stack roboticist, working on both software (algorithms and control) and hardware (mechanical and electronic design). This lets me consider mechanical and algorithmic co-design in developing robust robot collectives.

<!-- My dissertation research focuses on the creating algorithms for distributed decision-making in robots swarms. Specifically, I am developing algorithms for a variety of inspection tasks, where groups of robots with decentralized computation and communication must collectively investigate and classify their environment. This includes *global* inspection tasks, where the robots classify an environment, and *local* inspection, where the robots determine the presence and location of faults in their environment. -->
<!--
During my PhD, I was a [Siebel Scholar](https://www.siebelscholars.com/) and Department of Energy [Computational Science Graduate Fellow](https://www.krellinst.org/csgf/) (DOE CSGF), and I interned at Lawrence Livermore National Laboratory. Previously, I earned an MRes in Bioengineering at Imperial College London as a Marshall Scholar and a BS in Behavioral Neuroscience at Northeastern University. -->

<!-- Outside of work, I am excited about science communication and outreach. I've [spoken to hundreds of kids about robots](https://www.brainson.org/shows/2018/05/08/what-was-the-first-robot-and-more-from-robotstravaganza), given a [public lecture on robotics](http://sitn.hms.harvard.edu/seminars/2018/november-14-brains-bodies-make-smart-robots/) through Harvard's Science in the News lecture series, and demonstrated my PhD lab's Kilobots at a variety of outreach events. -->

        </vue-markdown>
        <p>In my free time, I'm into curling, baking
          <a href="http://recklessham.com/">awesome cinnamon rolls</a>, and
          <nuxt-link to="side-projects">making fun things</nuxt-link>.
        </p>
        <vue-markdown>
## Recent News

**November 2023:** I'm starting as Autonomy Lead at [Fleet Robotics](https://www.fleetrobotics.ai/). Let's clean some ships!

**June 2022:** I was part of two papers that were accepted to IROS 2022: ["A Hybrid PSO Algorithm for Multi-robot Target Search and Decision Awareness"](/pdfs/inproceedings/2022_iros_hybrid.pdf) and ["Impressionist Algorithms for Autonomous Multi-Robot Systems: Flocking as a Case Study".](/pdfs/inproceedings/2022_iros_impressionist.pdf)

**June 2022:** I started a new position at [Outrider](https://www.outrider.ai/), where I will develop mission planning algorithms and software for autonomous trucks.

**April 2022:** I successfully defended my PhD! It's titled "Distributed Decision-making Algorithms for Inspection by Autonomous Robot Collectives."

**January 2022:** We have a new paper out: "A Swarm Robotic Approach to Inspection of 2.5D Surfaces in Orbit." You can [read it here.](/pdfs/inproceedings/2022_swarm.pdf)
        </vue-markdown>
      </div>
      <div class="block-content">
        <h1 class="title is-2 has-text-centered">See More</h1>
        <div class="has-flex-items">
          <!-- <image-block-link title="CV"></image-block-link> -->
          <image-block-link title="Resume" icon="cv"></image-block-link>
          <image-block-link title="Research"></image-block-link>
          <image-block-link title="Side Projects"></image-block-link>
          <image-block-link title="Publications"></image-block-link>
          <!-- <image-block-link title="Media"></image-block-link> -->
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
