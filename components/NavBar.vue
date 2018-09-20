<template>
<div class="navbar is-black is-fixed-top is-solid" role="navigation" aria-label="main navigation" id="top-nav">
    <div class="container">
        <div class="navbar-brand">
            <nuxt-link v-if=isOtherPage to="/">
                <img src="/imgs/icons/about-me.svg" id='brand-icon'
                  class="navbar-item">
            </nuxt-link>
            <img src="/imgs/icons/about-me.svg" id='brand-icon'
                v-else
                v-scroll-to="'#header'" class="navbar-item">
            <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu" id="navMenu" v-if=isOtherPage>
            <div class="navbar-end">
              <a v-for="(name, slug) in sectionLinks" :key="slug"
                :href="'/#'+slug" class="navbar-item">
                {{ name }}
              </a>
            </div>
        </div>

        <scrollactive class="navbar-menu" id="navMenu" :offset="52" v-else>
            <div class="navbar-end">
              <a v-for="(name, slug) in sectionLinks" :key="slug"
                :href="'/#'+slug" class="navbar-item scrollactive-item">
                {{ name }}
              </a>
            </div>
        </scrollactive>

    </div>
</div>
</template>

<script>
import slugify from "slugify";

var sectionNames = [
  "About Me",
  "CV",
  "Research",
  "Publications",
  "Projects",
  "Media"
];

export default {
  props: { isOtherPage: { default: false } },
  computed: {
    sectionLinks: function() {
      return sectionNames.reduce((accum, section) => {
        accum[slugify(section, { lower: true })] = section;
        return accum;
      }, {});
    },
    header: function() {
      if (process.browser) {
        return document.getElementById("top-nav");
      }
    }
  },
  methods: {
    setOpacity: function() {
      if (process.browser) {
        let scrollpos = window.scrollY;
        var header_height = this.header.offsetHeight;
        if (scrollpos >= header_height * 3) {
          this.header.classList.add("is-solid");
        } else {
          this.header.classList.remove("is-solid");
        }
      }
    },
    addBurgerToggles: function() {
      if (process.browser) {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(
          document.querySelectorAll(".navbar-burger"),
          0
        );

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
          // Add a click event on each of them
          $navbarBurgers.forEach(el => {
            el.addEventListener("click", () => {
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle("is-active");
              $target.classList.toggle("is-active");
            });
          });
        }
      }
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.setOpacity);
      this.addBurgerToggles();
    }
  }
};
</script>

<style lang="scss">
</style>
