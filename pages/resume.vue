<template>
  <primary-section :title="title" subtitle="I'm starting a new job soon!" texture="brick-wall" icon='cv' class="is-printable">
    <div slot="links">
        <icon-button-link to="/pdfs/ebert-julia.resume.pdf" icon="file-pdf">View as PDF</icon-button-link>
        <!-- <icon-button-link is-internal to="/cv" icon="school">Academic CV</icon-button-link> -->
    </div>
    <div class="block-content content has-margin-small">
      <resume-content></resume-content>
    </div>
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
