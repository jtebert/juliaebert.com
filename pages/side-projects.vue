<template>
  <primary-section
    :title="title"
    subtitle="I make a lot of mostly useless things"
    texture="lines-in-motion"
  >
    <div slot="links">
      <!-- <p class="buttons">
      <icon-button-link
        to="https://blog.juliaebert.com"
        icon="pencil">
        Blog
      </icon-button-link>
      </p>-->
        <icon-button-link
          to="https://docs.juliaebert.com"
          icon="file-document-box-multiple"
        >Julia's Docs</icon-button-link>
        <icon-button-link
          to="http://fab.cba.mit.edu/classes/863.17/Harvard/people/julia-ebert/"
          icon="hammer"
        >Julia Makes Things</icon-button-link>
    </div>
    <div slot="intro">
      <p>From building a Lego model of the lab to making a quilt out of conference t-shirts to building a an entire website, I enjoy making stuff. While a lot of these side projects might be superficially useless to most people, these projects taught me skills like web development, programming with domain experts, and how to survive the incredible frustration of learning new things on my own.</p>
      <p>Recently, I have also gotten into the habit of <a href="https://docs.juliaebert.com/projects">documenting my projects</a> as I go, so you can also check out what I'm currently working on.</p>
    </div>
    <div>

      <project
        is-cover
        img-src="/imgs/projects/keyboard.jpg"
        title="Handwired Computer Keyboard"
      >
        <div>
          <tags tags="C++, 3D Printing, Electronics"></tags>
          <p>When I couldn't find <i>exactly</i> the kind of computer keyboard I wanted, it was a great excuse to design and build my own from sratch (ostensibly as a project for my electronics class). Together with my class partner, I designed the layout, handwired the keyboard, and built the firmware. I also went completely overboard 3D printing the case and all the keycaps. And I wrote way too much documentation along the way.</p>
          <icon-link icon="file-document-box-multiple" to="https://docs.juliaebert.com/projects/keyboard">Read everything</icon-link>
        </div>
      </project>

      <project
        is-mockup
        img-src="/imgs/projects/documentation-mockup.png"
        title="Document Everything"
      >
        <div>
          <tags tags="Jekyll"></tags>
          <p>To get into good habits about documenting things I work on, and to avoid Googling the same StackOverflow answers over and over, I made a website to document everything I do. I wanted it to be as easy to maintain as possible; all I have to do is write some Markdown and push it to Github.</p>
          <icon-link icon="file-document-box-multiple" to="https://docs.juliaebert.com/">Read my docs</icon-link>
          <icon-link icon="github-circle" to="https://github.com/jtebert/document-everything">View on GitHub</icon-link>
        </div>
      </project>

      <project
        is-mockup
        img-src="/imgs/projects/juliaebert.com-mockup-desktop.png"
        title="juliaebert.com"
      >
        <div>
          <tags tags="Nuxt, Vue.js"></tags>
          <p>I made this website from scratch, too! I wanted to learn a JavaScript framework, and while I was at it, a new static website generator. It was the perfect opportunity to go overboard, including building my own backend to manage publications.</p>
          <icon-link icon="github-circle" to="https://github.com/jtebert/juliaebert.com">View on GitHub</icon-link>
        </div>
      </project>

      <project
        is-mockup
        img-src="/imgs/projects/reckless-ham-mockup-desktop.png"
        mobile-img-src="/imgs/projects/reckless-ham-mockup-mobile.png"
        title="Reckless Ham"
      >
        <div>
          <tags tags="Python, Django, Wagtail CMS"></tags>
          <p>It's cookbook-style recipe website (formerly called Lazy Baker) using the Wagtail CMS framework for Django. It was a fun challenge for myself to build the whole thing in a weekend and a week's worth of evenings. I was bad at keeping track of recipes from various cookbooks, websites, and a very poorly organized recipe box. Clearly, the easiest solution to this problem was to build an entire website from scratch.</p>
          <icon-link icon="food-fork-drink" to="http://recklessham.com/">Find a tasty recipe</icon-link>
          <icon-link icon="github-circle" to="https://github.com/jtebert/lazy-baker">View on GitHub</icon-link>
        </div>
      </project>
      <project
        is-mockup
        img-src="/imgs/projects/jekyll-polymer-mockup-desktop.png"
        mobile-img-src="/imgs/projects/jekyll-polymer-mockup-mobile.png"
        title="Jekyll Polymer"
      >
        <div>
          <tags tags="HTML, JavaScript, Jekyll, Google Polymer"></tags>
          <p>This project combines the static website generation of Jekyll with the web components framework of Google Polymer to create a full-featured material design blog template.</p>
          <icon-link icon="web" :to="'https://jtebert.github.io/jekyll-polymer/'">View demo</icon-link>
          <icon-link
            icon="github-circle"
            :to="'https://github.com/jtebert/jekyll-polymer'"
          >View on GitHub</icon-link>
        </div>
      </project>
      <project is-cover img-src="/imgs/projects/suture-score.jpg" title="Suture Score">
        <div>
          <tags tags="Python, Ruby, Matlab, JavaScript"></tags>
          <p>Suture Score is an application to provide instant, objective feedback on suturing technique to surgical trainees. To prepare for assessments and surgery, students need as much practice as possible. Using innovative image recognition techniques, Suture Score aims to enhance trainees' practice to improve their suturing skills.</p>
          <p>Suture Score was created at the NHS-sponsored TELHack hackathon, where it won first place. It's now being tested for further development and use within the NHS.</p>
          <icon-link icon="web" :to="'https://scoremysutures.herokuapp.com/'">View website</icon-link>
        </div>
      </project>
      <project
        is-mockup
        :img-src="'/imgs/projects/sciencebait-mockup-desktop.png'"
        title="Science Clickbait"
      >
        <div>
          <tags tags="Python, Django"></tags>
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
            icon="github-circle"
            :to="'https://github.com/jtebert/sciencebait'"
          >View on GitHub</icon-link>
        </div>
      </project>
      <project
        is-padded
        :img-src="'/imgs/projects/vroom_logo_alt.png'"
        img-align="right"
        title="VROOM: Vacuum Robot Overcoming Obstacles and Messes"
      >
        <div>
          <tags tags="Python"></tags>
          <p>VROOM was a final project for an artificial intelligence course. It is a simulated robotic vacuum cleaner designed to explore its environment, classify the types of obstacles it encounters, and plan an efficient path to clean dirt in expected locations. It makes use of many classical AI algorithms such as A* search and naive Bayes classification.</p>
          <icon-link icon="github-circle" :to="'https://github.com/jtebert/vroom'">View on GitHub</icon-link>
        </div>
      </project>
      <project is-mockup :img-src="'/imgs/projects/blurber-mockup.png'" title="Blurber">
        <div>
          <tags tags="Python"></tags>
          <p>Blurber is a web app to create fake book blurbs. Using the titles and descriptions of the top 300 books in every category on Amazon, this app will generate randomly generate new book blurbs with the power of Markov chains.</p>
          <p>Blurber was created with Mustafa Camurcu and Shreyas Mahimkar at HackBeanpot 2015, where it was a finalist.</p>
          <icon-link icon="web" :to="'https://blurber.herokuapp.com/'">Try it</icon-link>
          <icon-link icon="github-circle" :to="'https://github.com/jtebert/blurber'">View on GitHub</icon-link>
        </div>
      </project>
    </div>
  </primary-section>
</template>

<script>
import Tags from "~/components/Tags.vue";
import IconLink from "~/components/IconLink.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";
import Project from "~/components/Project.vue";
import VueMarkdown from "vue-markdown";
import PrimarySection from "~/components/PrimarySection.vue";

export default {
  components: {
    Tags,
    IconLink,
    IconButtonLink,
    VueMarkdown,
    Project,
    Project,
    PrimarySection,
  },
  data() {
    return { title: "Side Projects" };
  },
  head() {
    return {
      title: this.title + " - " + process.env.siteTitle,
      meta: [{ hid: "side-projects" }],
    };
  },
};
</script>
