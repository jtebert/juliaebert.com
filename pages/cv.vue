<template>
  <primary-section :title="title" subtitle="Academic Curriculum Vitae" texture="brick-wall" class="is-printable">
    <div slot="links">
        <icon-button-link to="/pdfs/ebert-julia.cv.pdf" icon="file-pdf-box">View as PDF</icon-button-link>
        <icon-button-link to="/resume" icon="file-account" is-internal>Industry Resume</icon-button-link>
    </div>
    <div class="block-content content">
      <cv-content></cv-content>
    </div>
  </primary-section>
</template>

<script setup>
import PrimarySection from "~/components/PrimarySection.vue"
import IconButtonLink from "~/components/IconButtonLink.vue"
import cvContent from "~/pages/cvContent.vue"

const title = ref("CV")

useHead({
  title: title.value + " - " + process.env.siteTitle,
  meta: [{ hid: "cv" }],
})
</script>
