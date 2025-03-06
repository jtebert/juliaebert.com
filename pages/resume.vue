<template>
  <primary-section :title="title" subtitle="I make robots work together" texture="brick-wall" icon='cv' class="is-printable">
    <template #links>
      <icon-button-link to="/pdfs/ebert-julia.resume.pdf" icon="file-pdf-box">View as PDF</icon-button-link>
      <!-- <icon-button-link is-internal to="/cv" icon="school">Academic CV</icon-button-link> -->
    </template>
      <template #default>
        <resume-content/>
      </template>
  </primary-section>
</template>

<script>
import PrimarySection from "~/components/PrimarySection.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";
import resumeContent from "~/pages/resumeContent.vue";

export default {
  // layout: "printable",
  components: {
    PrimarySection,
    IconButtonLink,
    resumeContent,
  },
  data() {
    return { title: "Resume" };
  },
  head() {
    return {
      title: this.title + " - " + process.env.siteTitle,
      meta: [{ hid: "resume" }],
      // script: [
      //   {
      //     hid: "paged",
      //     src: "https://unpkg.com/pagedjs/dist/paged.polyfill.js",
      //   },
      // ],
    };
  },
};
</script>

<style scoped>
@page {
  /* margin: 1in; */
}
</style>
