<template>
<div class="page-content">
  <h1 class="title is-1-desktop is-3-touch has-text-success">Research</h1>
  <p class="intro">These are research projects I've been involved in and
  projects that I'm
  currently working on.</p>
  <hr>
  <project :img-src="require('~/assets/imgs/research/kilobots.jpg')">
    <div slot="content">
      <h2 class="title">Collective Perception and Decision Making in a
      Robot Swarm</h2>
      <h3 class="subtitle">Advisor: Radhika Nagpal</h3>
      <p>This research aims to improve the ability of a large group of robots to
      perceive and understand their environment by employing agents with
      different perceptual skills.</p>
    </div>
    <div slot="results">
      Poster link
    </div>
  </project>


<div class="bibtex_template content">
    <span class="if url">
      <a class="url">(view online)</a>
    </span>
    <span class="author">
      <span class="von"> </span>&nbsp;<span class="last"></span>
      <span class="first_initial">, </span>
    </span>

    "<span class="title"></span>,"
    <span class="if booktitle">
      in <i><span class="booktitle"></span></i>,
    </span>

    <span class="if year">
      <span class="year"></span>,
    </span>

    <span class="if pages">
      pp. <span class="pages"></span>
    </span>

    <span class="if note">
      <span class="note"></span>
    </span>

    <span class="if addendum">
      <span class="addendum"></span>
    </span>.
</div>

<bibtex v-pre src="/papers.bib"></bibtex>
<bibtex v-pre src="/posters.bib"></bibtex>
<div id="bibtex_display" class="content"></div>

<a href="/papers.bib">LINK</a>


</div>
</template>

<script>
import Project from "~/components/Project.vue";

export default {
  components: {
    Project
  }
};
</script>


<style lang="scss">
.page-content {
  background-color: $light;
  width: 100%;
  padding: 1.25rem 1.5rem;

  .intro {
    font-size: 1.2rem;
  }
}

#bibtex_display {
  .title {
    font-size: 1rem;
    font-weight: 400;
    display: inline;
  }
}
</style>
