<template>
  <primary-section :title="title" subtitle="Curriculum Vitae" texture="brick-wall">
    <div slot="links">
      <p class="buttons">
        <icon-button-link to="/pdfs/ebert-julia.cv.pdf" icon="file-pdf">View as PDF</icon-button-link>
      </p>
    </div>
    <div class="block-content content">
      <cv-content :isPaper="false"></cv-content>
    </div>
  </primary-section>
</template>

<script>
import PrimarySection from "~/components/PrimarySection.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";
import cvContent from "~/pages/cvContent.vue";

export default {
  components: {
    PrimarySection,
    IconButtonLink,
    cvContent
  },
  data() {
    return { title: "CV" };
  },
  head() {
    return {
      title: this.title + " - " + process.env.siteTitle,
      meta: [{ hid: "cv" }]
    };
  }
};
</script>
