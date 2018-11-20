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
      'march-for-science.jpg',
      'curling.jpg',
      ['project_night_four_web.jpg', 'Olivia Nie/SEAS Communications']
      ]"
      ></gallery>
      <div class="block-content content">
        <vue-markdown>
I am a PhD candidate in computer science at Harvard University. I am a member of the [Self-organizing Systems Research group](https://ssr.seas.harvard.edu/), where I study bio-inspired collective robotics with Prof. Radhika Nagpal. I am also a Department of Energy Computational Science Graduate Fellow (DOE CSGF). Previously, I earned an MRes in bioengineering from Imperial College London and a BS in behavioral neuroscience from Northeastern University.

I am interested in biology, learning, robotics, and the interface between them, such as bio-inspired robotics, cooperative robot control, and artificial intelligence. During my PhD, my goal is to apply concepts from neuroscience and biological behavior to improve the collective behavior of robots. After my PhD, I plan to pursue a career in academic research.

In the first years of my PhD, I developed an algorithm for a swarm of simple Kilobot robots to make decisions about multiple features of their environment, and I designed and built a set of larva-inspired robots that climb over each to move faster as a group.

I also care about science communication and outreach. I've [spoken to hundreds of kids about robots](https://www.brainson.org/shows/2018/05/08/what-was-the-first-robot-and-more-from-robotstravaganza), [given a public lecture](http://sitn.hms.harvard.edu/seminars/2018/november-14-brains-bodies-make-smart-robots/) on robotics through Harvard's Science in the News lecture series, and demonstrated our lab's Kilobots at a variety of outreach events.
        </vue-markdown>
        <p>In my free time, I play for the
          <a href="http://harvardcurling.com/">Harvard curling team</a>, bake
          <a href="http://lazybaker.juliaebert.com/">awesome cinnamon rolls</a>, and
          <nuxt-link to="side-projects">make fun things</nuxt-link>.
        </p>
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

    <!-- <primary-section texture="hexagons" title="Contact Me" subtitle="Hello, World.">
      <div class="block-content">
        <form name="contact" action="/" method="post" netlify>
          <input type="hidden" name="_gotcha">
          <input type="hidden" name="form-name" value="contact">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">From</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input class="input" type="text" placeholder="Name" name="name">
                  <span class="icon is-small is-left">
                    <i class="mdi mdi-account"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input class="input" type="email" placeholder="Email" name="email">
                  <span class="icon is-small is-left">
                    <i class="mdi mdi-at"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Subject</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" name="subject">
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Message</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea class="textarea" name="message"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-medium is-primary" type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </primary-section> -->
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
