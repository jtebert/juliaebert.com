<template>
<page-content
  title="Research"
  :hasSection="false">

  <p slot="intro">These are research projects I've been involved in and
  projects that I'm currently working on.</p>

  <div slot="content">
    <project
      :img-src="require('~/assets/imgs/research/kilobots.jpg')"
      title="Collective Perception and Decision Making in a Robot Swarm"
      subtitle="Advisor: Prof. Radhika Nagpal">
      <p slot="content">
        This research aims to improve the ability of a large group of robots to
        perceive and understand their environment by employing agents with
        different perceptual skills.
      </p>
      <div slot="results">
        <publication-list
          highlight-author="Ebert"
          :pub-key-filter="['ebert2018aamas']">
        </publication-list>
      </div>
    </project>

    <project
      :img-src="require('~/assets/imgs/research/lopes_ii.png')"
      img-align="right"
      title="Cooperative Exoskeleton Control for Human Balance Recovery"
      subtitle="Advisors: Prof. Etienne Burdet and Dr. Ildar Farkhatdinov">
      <p slot="content">
        Maintaining balance in the face of perpurbations is essential to walking
        and standing. For my masters thesis, I developed controls for LOPES
        (LOwer-extremity Powered ExoSkeleton, University of Twente) to assist
        humans with balance recovery after perturbations, using a combination of
        feed-forward and feedback control (such as hip torques and a PD
        controller). We found that even simple, single-joint torques are
        sufficient to reduce the time to a recovery movement and the energy used
        by subjects in recovery.
      </p>
      <div slot="results">
        <publication-list
          highlight-author="Ebert"
          :pub-key-filter="['ebert2016eurohaptics']">
        </publication-list>
      </div>
    </project>

    <project
      :img-src="require('~/assets/imgs/research/bimanual_small.jpg')"
      title="Bimanual Learning and Retension"
      subtitle="Advisor: Prof. Dagmar Sternad">
      <div slot="content">
        <p>
          Participants were asked to perform a task in which one arm is moved
          rhythmically while the other makes fast, discrete movements when cued.
          Over 20 sessions of practice, participants learned the task
          asymmetrically: while they learned to make much faster discrete
          movements, they failed to attenuate the perturbation these discrete
          movements caused in the rhythmic arm. After 6 months, subjects retained
          the skills they learned, including the asymmetry.
        </p>
        <p>
          I proposed this research in my application the Barry Goldwater
          Scholarship and conducted the work for my undergraduate honors thesis.
          It was also funded by two Provost Undergraduate Research Awards.
        </p>
      </div>
        <div slot="results">
          <publication-list
            highlight-author="Ebert"
            :pub-key-filter="['ebert2015ncm']">
          </publication-list>
        </div>
    </project>

  </div>
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
