<template>
    <div>

        <p slot="intro">
          These are some of the side projects I've worked on. You can also find
          a lot of my projects on my
          <a href="https://github.com/jtebert">GitHub page.</a>
        </p>

        <div slot="content">
          <full-project is-alt
            :img-src="'/imgs/programming/lazy-baker.png'"
            title="Lazy Baker">
            <div slot="content">
              <tags tags="Python, Django, Wagtail CMS"></tags>
              <vue-markdown>
It's cookbook-style recipe website using the Wagtail CMS framework for Django. It was a fun challenge for myself to build the whole thing in a weekend and a week's worth of evenings.

I was bad at keeping track of recipes from various cookbooks, websites, and a very poorly organized recipe box. Clearly, the easiest solution to this problem was to  build an entire website from scratch to put all the recipes in.
              </vue-markdown>
              <icon-link
                icon="web"
                :to="'http://lazybaker.juliaebert.com/'">
                Find a tasty recipe
              </icon-link>
              <icon-link
                icon="github-circle"
                :to="'https://github.com/jtebert/lazy-baker'">
                View on GitHub
              </icon-link>
            </div>
          </full-project>

          <project
            :img-src="'/imgs/programming/owen-tribune.png'"
            img-align="right"
            title="The Owen Tribune">
            <div slot="content">
              <tags tags="Python, Django"></tags>
              <p>
                A satirical fake news website, styled after the New York Times
                and New Yorker. I made it as a Christmas present (for someone
                named Owen).
              </p>
              <icon-link
                icon="web"
                :to="'http://owen-tribune.herokuapp.com/'">
                Read some fake news
              </icon-link>
              <icon-link
                icon="github-circle"
                :to="'https://github.com/jtebert/owen-tribune'">
                View on GitHub
              </icon-link>
            </div>
          </project>

          <project
            :img-src="'/imgs/programming/jekyll-polymer.png'"
            title="Jekyll Polymer">
            <div slot="content">
              <tags tags="HTML, JavaScript, Jekyll, Google Polymer"></tags>
              <p>
                This project combines the static website generation of Jekyll
                with the web components framework of Google Polymer to create a
                full-featured material design blog template.
              </p>
              <icon-link
                icon="web"
                :to="'http://juliaebert.com/jekyll-polymer'">
                View demo
              </icon-link>
              <icon-link
                icon="github-circle"
                :to="'https://github.com/jtebert/jekyll-polymer'">
                View on GitHub
              </icon-link>
            </div>
          </project>

          <project
            :img-src="'/imgs/programming/suture-score.png'"
            img-align="right"
            title="Suture Score">
            <div slot="content">
              <tags tags="Python, Ruby, Matlab, JavaScript"></tags>
              <p>
                Suture Score is an application to provide instant, objective
                feedback on suturing technique to surgical trainees. To prepare
                for assessments and surgery, students need as much practice as
                possible. Using innovative image recognition techniques, Suture
                Score aims to enhance trainees' practice to improve their
                suturing skills.
              </p>
              <p>
                Suture Score was created at the NHS-sponsored TELHack hackathon,
                where it won first place. It's now being tested for further
                development and use within the NHS.
              </p>
              <icon-link
                icon="web"
                :to="'https://scoremysutures.herokuapp.com/'">
                View website
              </icon-link>
            </div>
          </project>

          <project
            :img-src="'/imgs/programming/sciencebait_logo.png'"
            title="Science Clickbait">
            <div slot="content">
              <tags tags="Python, Django"></tags>
              <p><i>"Paul Erdös Warned Us About Amino Acids, But Look What's Happening Now."</i></p>
              <p><i>"These Facts About Surface-Wave Tomography Will Change the Way You Look at Deformations in the Space-Time Continuum Forever."</i></p>
              <p>
                Tired of ridiculous clickbait titles all over your social media
                feeds? Confuse your friends and amuse yourself with
                science-themed clickbait headlines.
              </p>
              <p>
                Like the joke, this very stupid "artificial intelligence" is
                basically a bunch of "if" statements to fill in templates.
                That's what you get for a procrastination project in finals week.
              </p>
              <icon-link
                icon="web"
                :to="'http://sciencebait.juliaebert.com/'">
                Make a headline
              </icon-link>
              <icon-link
                icon="github-circle"
                :to="'https://github.com/jtebert/sciencebait'">
                View on GitHub
              </icon-link>
            </div>
          </project>

          <project
            :img-src="'/imgs/programming/vroom_logo_alt.png'"
            img-align="right"
            title="VROOM: Vacuum Robot Overcoming Obstacles and Messes">
            <div slot="content">
              <tags tags="Python"></tags>
              <p>
                VROOM was a final project for an artificial intelligence course.
                It is a simulated robotic vacuum cleaner designed to explore
                its environment, classify the types of obstacles it encounters,
                and plan an efficient path to clean dirt in expected locations.
                It makes use of many classical AI algorithms such as A* search
                and naive Bayes classification.
              </p>
              <icon-link
                icon="github-circle"
                :to="'https://github.com/jtebert/vroom'">
                View on GitHub
              </icon-link>
            </div>
          </project>

          <project
            :img-src="'/imgs/programming/blurber.png'"
            title="Blurber">
            <div slot="content">
              <tags tags="Python"></tags>
              <p>
                Blurber is a web app to create fake book blurbs. Using the
                titles and descriptions of the top 300 books in every category
                on Amazon, this app will generate randomly generate new book
                blurbs with the power of Markov chains.
              </p>
              <p>
                Blurber was created with Mustafa Camurcu and Shreyas Mahimkar at
                HackBeanpot 2015, where it was a finalist.
              </p>
              <icon-link
                icon="web"
                :to="'https://blurber.herokuapp.com/'">
                Try it
              </icon-link>
              <icon-link
                icon="github-circle"
                :to="'https://github.com/jtebert/blurber'">
                View on GitHub
              </icon-link>
            </div>
          </project>

        </div>
    </div>

</template>

<script>
import Tags from "~/components/Tags.vue";
import IconLink from "~/components/IconLink.vue";
import Project from "~/components/Project.vue";
import FullProject from "~/components/FullProject.vue";
import VueMarkdown from "vue-markdown";

export default {
  components: {
    Tags,
    IconLink,
    VueMarkdown,
    Project,
    FullProject
  },
  layout: "alt"
};
</script>
