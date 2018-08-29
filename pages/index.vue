<template>
<div>
  <div class="section scroll-section is-medium has-texture-circuit-board" id="research">
    <div class="container">
        <div class="section is-light is-small primary">
          <img class="icon-block" src="/imgs/icons/research.svg">
              <h1 class="title is-1">Research</h1>
              <h3 class="subtitle is-4">Beep boop something robots</h3>

        <div class=flexy>
            <div class="grid-img">
              <div class="image is-square">
                <img src="/imgs/self-csgf.jpg">
              </div>
            </div>
          <div class="grid-content">
            <h1 class="title is-2">Who I Am</h1>
            <p>
              I am a PhD candidate in computer science at Harvard University. I am a member of the Self-organizing Systems Research group, where I study bio-inspired collective robotics with Prof. Radhika Nagpal. I am also a Department of Energy Computational Science Graduate Fellow (DOE CSGF)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

<div class="children">
  <nuxt-child />
</div>

</div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  components: {
    VueMarkdown
  },
  layout: "alt"
};
</script>

<style lang="scss">
.container.is-narrow {
  max-width: 1000px;
}
.section.primary {
  position: relative;
  padding-left: 8rem;
  .icon-block {
    position: absolute;
    width: 10rem;
    height: 10rem;
    top: 3rem;
    left: -5rem;
    background-color: $primary;
  }
  .title.is-1 {
    font-size: 4rem;
  }
}
.flexy {
  // margin: $gap 0;
  display: flex;
  flex-direction: row;
  @include mobile {
    flex-direction: column;
  }
  .grid-img {
    width: 35%;
  }
  .grid-content {
    width: 65%;
    padding: 0 $gap;
  }
  &.img-right {
    flex-direction: row-reverse;
  }
}
.title.is-1,
.title.is-2 {
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
