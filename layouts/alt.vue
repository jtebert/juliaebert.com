<template>
<div>
<section class="hero is-black is-fullheight bg-img scroll-section" id="header">
<div class="hero-head">
    <nav-bar></nav-bar>
  </div>

    <div class="hero-body">
        <h1 class="title is-0">Julia Ebert</h1>
        <vue-typer class="subtitle" id="does-things"
            :pre-type-delay='600'
            :type-delay='70'
            :pre-erase-delay='2000'
            erase-style="clear"
            :text="[
                'programs a swarm.',
                'builds robots.',
                'simulates satellites.',
                'writes a blog.',
                'makes things.']">
        </vue-typer>
    </div>
    <div class="hero-footer has-text-centered">
      <div class="container">
        <i class="mdi mdi-chevron-down to-rest"
            v-scroll-to="'#stuff'"></i>
      </div>
    </div>
</section>

    <nuxt/>


<!-- <scroll-links></scroll-links> -->

</div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
.hero {
  .title.is-0 {
    padding-left: $gap;
    text-transform: uppercase;
    font-size: 90px;
    display: inline-block;
    letter-spacing: 2px;
    @include mobile {
      font-size: 13vw;
    }
  }
  .to-rest {
    font-size: 72px;
  }
  &.bg-img {
    background-image: url(/imgs/stars.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
}
#does-things {
  display: flex;
  align-items: center;
  padding-left: $gap;
  &.subtitle {
    line-height: 1em;
    font-size: 60px;
    &.vue-typer {
      .custom.char {
        color: $primary;
      }
      .custom.caret {
        background-color: $primary;
        width: 0.5em;
        height: 0.8em;
        vertical-align: bottom;
        margin: 0.1em 0.05em;
      }
    }
  }
}
</style>
