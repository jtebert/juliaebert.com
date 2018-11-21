<template>
  <div
    class="navbar is-black is-transparent"
    role="navigation"
    aria-label="main navigation"
    id="top-nav"
  >
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/">
          <img src="/imgs/icons/about-me.svg" id="brand-icon" class="navbar-item">
        </nuxt-link>
        <a
          role="button"
          class="navbar-burger"
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" id="navMenu">
        <div class="navbar-end">
          <nuxt-link
            v-for="(slug, name) in sectionNames"
            :key="slug"
            :to="'/'+slug"
            class="navbar-item"
          >{{ name }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from "slugify";

export default {
  props: {
    sectionNames: {
      default: function() {
        return {
          "About Me": "",
          CV: "cv",
          Research: "research",
          Publications: "publications",
          "Side Projects": "side-projects",
          Media: "media"
        };
      }
    }
  },
  data() {
    return { isActive: false };
  },
  computed: {
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
      //this.setOpacity();
      //window.addEventListener("scroll", this.setOpacity);
      this.addBurgerToggles();
    }
  }
};
</script>

<style lang="scss">
</style>
