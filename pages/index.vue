<template>
<div>
  <div class="section scroll-section">
    <div class="container is-narrow">
      <div class=flexy>
        <hex-img :width=300 class="grid-img"
          img-src="/imgs/self-csgf.jpg"></hex-img>
        <div class="grid-content">
          <h1 class="title is-2">Who I Am</h1>
          <p>
            I am a PhD candidate in computer science at Harvard University. I am a member of the Self-organizing Systems Research group, where I study bio-inspired collective robotics with Prof. Radhika Nagpal. I am also a Department of Energy Computational Science Graduate Fellow (DOE CSGF)
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="section has-background-black-bis">
    <div class="container is-narrow">
      <h1 class="title is-1 has-text-centered">What I Do</h1>
      <div class="flexy img-right">
        <hex-img :width=300 class="grid-img"
          img-src="/imgs/research/kilobots2.jpg"></hex-img>
        <div class="grid-content">
          <h2 class="title is-3">For Research</h2>
          <vue-markdown class="content">
I am interested in biology, learning, robotics, and the interface between them, such as bio-inspired robotics, cooperative robot control, and artificial intelligence. During my PhD, my goal is to apply concepts from neuroscience and biological learning to improve the collective behavior of robots.

In the first years of my PhD, I developed an algorithm for a swarm of simple Kilobot robots to make decisions about multiple features of their environment, and I designed and built a set of larva-inspired robots that climb over each to move faster as a group. Now, I am developing methods to make it easier to create and understand complex swarm behavior -- imagine map reduce for robots.

I also care about science communication and outreach. I've spoken to an audience of hundreds of kids about bio-inspired robots, and this fall I will be giving a public talk on robotics through Harvard's Science in the News fall lecture series.

After my PhD, I plan to pursue a career in academic research.
          </vue-markdown>
        </div>
      </div>

      <div class="flexy">
        <hex-img :width=300 class="grid-img"
          img-src="/imgs/curling.jpg"></hex-img>
        <div class="grid-content">
          <h2 class="title is-3">For Fun</h2>
          <vue-markdown class="content">
I like to make things in my free time. Need a clickbait headline for your next science project? [I've got you covered.](http://sciencebait.juliaebert.com) Need some robots that climb over each other? [I made them in fun colors.](http://fab.cba.mit.edu/classes/863.17/Harvard/people/julia-ebert/project/)

I am also on the [Harvard curling team](http://harvardcurling.com/), and I enjoy [baking cinnamon rolls](http://lazybaker.juliaebert.com/). (I made both those websites, too.)
          </vue-markdown>
        </div>
      </div>
    </div>
  </div>


    <div class="section is-unpadded scroll-section">
      <div class="section-image">
        <img src="https://source.unsplash.com/random/800x600">
      </div>
      <div class="section-content">
        <h1 class="title is-1">Hello, World</h1>
      </div>
    </div>
</div>
</template>

<script>
import HexImg from "~/components/HexImg.vue";
import VueMarkdown from "vue-markdown";
export default {
  components: {
    HexImg,
    VueMarkdown
  },
  layout: "alt"
};
</script>

<style lang="scss">
.container.is-narrow {
  max-width: 1000px;
  .flexy {
    margin: $column-gap 0;
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
      padding: $gap;
    }
    &.img-right {
      flex-direction: row-reverse;
    }
  }
}

.section.is-unpadded {
  padding: 0;
  display: flex;
  flex-direction: row;
  .section-image {
    width: 40%;
    position: relative;
    img {
      object-fit: cover;
      object-position: center center;
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
  }
  .section-content {
    width: 60%;
    padding: 5rem;
    color: $text;
  }
}
</style>
