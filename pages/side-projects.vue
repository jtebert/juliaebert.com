<template>
  <primary-section
    :title="title"
    subtitle="I make a lot of mostly useless things"
    texture="lines-in-motion"
  >
    <template #links>
        <icon-button-link
          to="https://docs.juliaebert.com"
          icon="text-box-multiple"
        >Julia's Docs</icon-button-link>
        <icon-button-link
          to="http://fab.cba.mit.edu/classes/863.17/Harvard/people/julia-ebert/"
          icon="hammer-wrench"
        >Julia Makes Things</icon-button-link>
    </template>
    <template #intro>
      <p>From building a Lego model of the lab to making a quilt out of conference t-shirts to building a an entire website, I enjoy making stuff. While a lot of these side projects might be superficially useless to most people, these projects taught me skills like web development, programming with domain experts, and how to survive the incredible frustration of learning new things on my own.</p>
      <p>Recently, I have also gotten into the habit of <a href="https://docs.juliaebert.com/projects">documenting my projects</a> as I go, so you can also check out what I'm currently working on.</p>
    </template>
    <div>

      <project
        is-cover
        img-src="/imgs/projects/mega-lego-minifigure.jpg"
        title="Mega Lego Minifigures"
      >
        <div>
          <tags tags="Lego, 3D Printing, CAD (OnShape)"/>
          <p>What better way to combine my childhood love of Lego with my adult love of 3D printing? I modeled a 10x scale Lego minifigure from scratch in OnShape, and carefully designed the whole thing for 3D printing with minimal supports, robust joints, and accurate tolerances.</p>
          <p>The design has been my biggest hit on both Makerworld and Printables, and has spawned a huge variety of remixes and accessories. It's always amazing to see my own projects spark others' creativity, and see the photos of a thrilled child holding the giant Lego minifigure their parents printed for them.</p>
          <icon-link icon="printer-3d-nozzle" to="https://www.printables.com/model/300000-mega-lego-minifigure">View on Printables</icon-link>
          <icon-link icon="printer-3d-nozzle" to="https://makerworld.com/en/models/48116-mega-lego-like-minifigure-10-1-scale">View on Makerworld</icon-link>
        </div>

      </project>

      <project
        is-cover
        img-src="/imgs/projects/brain-3d-print.jpg"
        title="My 3D Printed Brain"
      >
        <div>
          <tags tags="3D Printing, Blender"/>
          <p>After a degree in neuroscience, I've always wanted to hold my own brain in my hands. Thanks to an MRI, some research software, and my first foray into Blender, I finally made it happen. (Bonus: the hemispheres are held together with magnets!)</p>
          <icon-link icon="printer-3d-nozzle" to="https://docs.juliaebert.com/projects/3d-print-brain">Read more</icon-link>
          <icon-link icon="printer-3d-nozzle" to="https://www.printables.com/model/207798-full-size-human-brain">View on Printables</icon-link>
        </div>
      </project>

      <project
        is-cover
        img-src="/imgs/projects/keyboard.jpg"
        title="Handwired Computer Keyboard"
      >
        <div>
          <tags tags="C++, 3D Printing, Electronics"/>
          <p>When I couldn't find <i>exactly</i> the kind of computer keyboard I wanted, it was a great excuse to design and build my own from scratch (ostensibly as a project for my electronics class). Together with my class partner, I designed the layout, handwired the keyboard, and built the firmware. I also went completely overboard 3D printing the case and all the keycaps. And I wrote way too much documentation along the way.</p>
          <icon-link icon="keyboard" to="https://docs.juliaebert.com/projects/keyboard">Read more</icon-link>
        </div>
      </project>

      <project
        is-mockup
        img-src="/imgs/projects/documentation-mockup.png"
        title="Document Everything"
      >
        <div>
          <tags tags="Jekyll"/>
          <p>To get into good habits about documenting things I work on, and to avoid Googling the same StackOverflow answers over and over, I made a website to document everything I do. I wanted it to be as easy to maintain as possible; all I have to do is write some Markdown and push it to GitHub.</p>
          <icon-link icon="text-box-multiple" to="https://docs.juliaebert.com/">Read my docs</icon-link>
          <icon-link icon="github" to="https://github.com/jtebert/document-everything">View on GitHub</icon-link>
        </div>
      </project>

      <project
        is-mockup
        img-src="/imgs/projects/juliaebert.com-mockup-desktop.png"
        title="juliaebert.com"
      >
        <div>
          <tags tags="Nuxt, Vue.js"/>
          <p>I made this website from scratch, too! I wanted to learn a JavaScript framework, and while I was at it, a new static website generator. It was the perfect opportunity to go overboard, including building my own backend to manage publications.</p>
          <icon-link icon="github" to="https://github.com/jtebert/juliaebert.com">View on GitHub</icon-link>
        </div>
      </project>

      <project
        is-mockup
        img-src="/imgs/projects/reckless-ham-mockup-desktop.png"
        mobile-img-src="/imgs/projects/reckless-ham-mockup-mobile.png"
        title="Reckless Ham"
      >
        <div>
          <tags tags="Python, Django, Wagtail CMS"/>
          <p>It's cookbook-style recipe website (formerly called Lazy Baker) using the Wagtail CMS framework for Django. It was a fun challenge for myself to build the whole thing in a weekend and a week's worth of evenings. I was bad at keeping track of recipes from various cookbooks, websites, and a very poorly organized recipe box. Clearly, the easiest solution to this problem was to build an entire website from scratch.</p>
          <icon-link icon="food-fork-drink" to="http://recklessham.com/">Find a tasty recipe</icon-link>
          <icon-link icon="github" to="https://github.com/jtebert/lazy-baker">View on GitHub</icon-link>
        </div>
      </project>
      <project
        is-mockup
        img-src="/imgs/projects/jekyll-polymer-mockup-desktop.png"
        mobile-img-src="/imgs/projects/jekyll-polymer-mockup-mobile.png"
        title="Jekyll Polymer"
      >
        <div>
          <tags tags="HTML, JavaScript, Jekyll, Google Polymer"/>
          <p>This project combines the static website generation of Jekyll with the web components framework of Google Polymer to create a full-featured material design blog template.</p>
          <icon-link icon="web" :to="'https://jtebert.github.io/jekyll-polymer/'">View demo</icon-link>
          <icon-link
            icon="github"
            :to="'https://github.com/jtebert/jekyll-polymer'"
          >View on GitHub</icon-link>
        </div>
      </project>
      <project is-cover img-src="/imgs/projects/suture-score.jpg" title="Suture Score">
        <div>
          <tags tags="Python, Ruby, Matlab, JavaScript"/>
          <p>Suture Score is an application to provide instant, objective feedback on suturing technique to surgical trainees. To prepare for assessments and surgery, students need as much practice as possible. Using innovative image recognition techniques, Suture Score aims to enhance trainees' practice to improve their suturing skills.</p>
          <p>Suture Score was created at the NHS-sponsored TELHack hackathon, where it won first place. It's now being tested for further development and use within the NHS.</p>
          <!-- <icon-link icon="web" :to="'https://scoremysutures.herokuapp.com/'">View website</icon-link> -->
        </div>
      </project>
      <!-- <project
        is-mockup
        :img-src="'/imgs/projects/sciencebait-mockup-desktop.png'"
        title="Science Clickbait"
      >
        <div>
          <tags tags="Python, Django"/>
          <p>
            <i>"Paul Erdös Warned Us About Amino Acids, But Look What's Happening Now."</i>
          </p>
          <p>
            <i>"These Facts About Surface-Wave Tomography Will Change the Way You Look at Deformations in the Space-Time Continuum Forever."</i>
          </p>
          <p>Tired of ridiculous clickbait titles all over your social media feeds? Confuse your friends and amuse yourself with science-themed clickbait headlines.</p>
          <p>Like the joke, this very stupid "artificial intelligence" is basically a bunch of "if" statements to fill in templates. That's what you get for a procrastination project in finals week.</p>
          <icon-link icon="web" :to="'http://sciencebait.juliaebert.com/'">Make a headline</icon-link>
          <icon-link
            icon="github"
            :to="'https://github.com/jtebert/sciencebait'"
          >View on GitHub</icon-link>
        </div>
      </project> -->
      <!-- <project
        is-padded
        :img-src="'/imgs/projects/vroom_logo_alt.png'"
        img-align="right"
        title="VROOM: Vacuum Robot Overcoming Obstacles and Messes"
      >
        <div>
          <tags tags="Python"/>
          <p>VROOM was a final project for an artificial intelligence course. It is a simulated robotic vacuum cleaner designed to explore its environment, classify the types of obstacles it encounters, and plan an efficient path to clean dirt in expected locations. It makes use of many classical AI algorithms such as A* search and naive Bayes classification.</p>
          <icon-link icon="github" :to="'https://github.com/jtebert/vroom'">View on GitHub</icon-link>
        </div>
      </project>
      <project is-mockup :img-src="'/imgs/projects/blurber-mockup.png'" title="Blurber">
        <div>
          <tags tags="Python"/>
          <p>Blurber is a web app to create fake book blurbs. Using the titles and descriptions of the top 300 books in every category on Amazon, this app will generate randomly generate new book blurbs with the power of Markov chains.</p>
          <p>Blurber was created with Mustafa Camurcu and Shreyas Mahimkar at HackBeanpot 2015, where it was a finalist.</p>
          <icon-link icon="web" :to="'https://blurber.herokuapp.com/'">Try it</icon-link>
          <icon-link icon="github" :to="'https://github.com/jtebert/blurber'">View on GitHub</icon-link>
        </div>
      </project> -->
    </div>
  </primary-section>
</template>

<script setup>
import Tags from "~/components/Tags.vue";
import IconLink from "~/components/IconLink.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";
import Project from "~/components/Project.vue";
import PrimarySection from "~/components/PrimarySection.vue";
import { ref } from 'vue';
import { useRuntimeConfig } from '#app';
import { usePageTitle } from '~/composables/usePageTitle';

const title = ref("Side Projects");
const config = useRuntimeConfig();

useHead({
  title: usePageTitle(title.value),
  meta: [{ hid: "side-projects" }],
});
</script>
