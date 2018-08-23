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
      <publication-list
        highlight-author="Ebert"
        :pub-key-filter="['ebert2018aamas']">
      </publication-list>
    </div>
  </project>

</page-content>
</template>

<script>
import Project from "~/components/Project.vue";
import PageContent from "~/components/PageContent.vue";
import PublicationList from "~/components/PublicationList.vue";

export default {
  components: {
    Project,
    PageContent,
    PublicationList
  }
};
</script>


<style lang="scss">
</style>
