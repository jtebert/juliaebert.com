<template>
<page-content
  title="Research">
  <p class="intro">These are research projects I've been involved in and
  projects that I'm currently working on.</p>
  <hr>
  <project
    :img-src="require('~/assets/imgs/research/kilobots.jpg')"
    title="Collective Perception and Decision Making in a Robot Swarm"
    subtitle="Advisor: Radhika Nagpal">
    <div slot="content">
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


</page-content>
</template>

<script>
import Project from "~/components/Project.vue";
import PageContent from "~/components/PageContent.vue";

export default {
  components: {
    Project,
    PageContent
  }
};
</script>


<style lang="scss">
#bibtex_display {
  .title {
    font-size: 1rem;
    font-weight: 400;
    display: inline;
  }
}
</style>
