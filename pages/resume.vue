<template>
  <primary-section :title="title" subtitle="Hire me! Available Spring 2022" texture="brick-wall" icon='cv' class="is-printable">
    <div slot="links">
        <icon-button-link to="/pdfs/ebert-julia.resume.pdf" icon="file-pdf">View as PDF</icon-button-link>
        <icon-button-link is-internal to="/cv" icon="school">Academic CV</icon-button-link>
    </div>
    <div class="block-content content">
      <resume-content></resume-content>
    </div>
  </primary-section>
</template>

<script>
import PrimarySection from "~/components/PrimarySection.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";
import resumeContent from "~/pages/resumeContent.vue";

export default {
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
    };
  },
};
</script>
