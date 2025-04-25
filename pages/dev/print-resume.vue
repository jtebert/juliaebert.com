<template>
    <div class="content is-printable dense-resume">
      <resume-content></resume-content>
    </div>
</template>

<script setup>
import resumeContent from "~/pages/resumeContent.vue";
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();
const title = "Resume";

useHead({
  title: `${title} - ${config.public.siteTitle}`,
  meta: [{ hid: "resume" }]
});
</script>
