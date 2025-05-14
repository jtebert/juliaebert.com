<template>
  <div>
    <primary-section
      title="About Me"
      subtitle='Julia Ebert, <span class="strikethrough">apprentice</span> robot herder, PhD'
      texture="plus"
    >
      <template #links>
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
      </template>
      <gallery
        :img-srcs="[
      ['csgf-robots.jpg', 'Kilobots: my PhD research platform'],
      ['zero-g-rad.jpg', 'ZERO-G research flight to test space station inspection robots', 'Stephen Boxall/ZERO-G'],
      //['project_night.jpg', 'Laser cutting a dishwasher sign at Project Night', 'Olivia Nie/SEAS Communications'],
      ['curling.jpg', 'College curling national championship (Harvard took 4th place!)'],
      //['march-for-science.jpg', '2017 Boston March for Science with SSR labmates'],
      ]"
      />
      <div class="block-content content">
        <p>I'm a roboticist and software engineer specializing in making weird robots autonomous. Whether you have robots navigating a ship underwater (<a href="https://www.fleetrobotics.ai/">Fleet Robotics</a>), autonomous trucks coordinating in a dense yard (<a href="https://www.outrider.ai/">Outrider</a>), or a swarm of hundreds of collaborating robots (<nuxt-link to="research">Harvard PhD</nuxt-link>) &mdash; I can make it work.</p>

        <p>I am currently Autonomy Lead at <a href="https://www.fleetrobotics.ai/">Fleet Robotics</a>, where I'm leading the software team for robots that clean ship hulls. I've taken our software stack and team from zero to an operational underwater robot fleet in just over a year. This is a challenging world for robots: stuck to a curved surface, underwater, on a moving ship, and requires continuous creative problem solving when we can't rely on traditional sensing and navigation techniques. Along the way, I've developed the practical skills to make a safe, reliable, and modular system that can grow with the team, and I've learned how to effectively lead a team of software engineers to achieve ambitious goals in a fast-paced environment.</p>

        <p>My educational background prepared me to tackle novel algorithmic problems in robotics. I completed my PhD in computer science at Harvard University, where I developed algorithms for a variety of multi-agent systems, from robots to satellite constellations. I also draw on my prior degrees in neuroscience and bioengineering, to take an interdisciplinary approach to robotics: integrating bio-inspiration and mathematical modeling to develop algorithms that can be applied in a multitude of new settings.</p>

        <p>In my free time, I'm into curling, baking
          <a href="http://recklessham.com/">awesome cinnamon rolls</a>,
          <nuxt-link to="side-projects">making fun things</nuxt-link>, and tackling a multitude of home renovation projects.
        </p>
      </div>
      <div class="block-content">
        <h1 class="title is-2 has-text-centered">See More</h1>
        <div class="has-flex-items">
          <!-- <image-block-link title="CV"></image-block-link> -->
          <image-block-link title="Resume" icon="cv"/>
          <image-block-link title="Research"/>
          <image-block-link title="Side Projects"/>
          <image-block-link title="Publications"/>
          <!-- <image-block-link title="Media"></image-block-link> -->
          <image-block-link title="Docs" link="https://docs.juliaebert.com"/>
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
import PrimarySection from "~/components/PrimarySection.vue";
import Gallery from "~/components/Gallery.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";
import ImageBlockLink from "~/components/ImageBlockLink.vue";

definePageMeta({
  components: {
    PrimarySection,
    Gallery,
    IconButtonLink,
    ImageBlockLink,
  },
  layout: "home",
});
</script>

<style lang="scss">
</style>