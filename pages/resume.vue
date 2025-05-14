<template>
  <primary-section :title="title" subtitle="I make robots work together" texture="brick-wall" icon='cv' class="is-printable">
    <template #links>
      <icon-button-link to="/pdfs/ebert-julia.resume.pdf" icon="file-pdf-box">View as PDF</icon-button-link>
    </template>
      <template #default>
        <resume-content/>
      </template>
  </primary-section>
</template>

<script setup>
import PrimarySection from "~/components/PrimarySection.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";
import resumeContent from "~/pages/resumeContent.vue";
import { usePageTitle } from '~/composables/usePageTitle';
import { ref } from 'vue';

const title = ref("Resume");

useHead({
  title: usePageTitle(title.value),
  meta: [{ hid: "resume" }],
});
</script>
