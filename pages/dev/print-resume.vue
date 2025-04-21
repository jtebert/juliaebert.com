<template>
    <div class="content is-printable dense-resume">
      <resume-content></resume-content>
    </div>
</template>

<script>
import resumeContent from "~/pages/resumeContent.vue";

export default {
  components: {
    resumeContent,
  },
  data() {
    return { title: "Resume" };
  },
  head() {
    return {
      title: this.title + " - " + process.env.siteTitle,
      meta: [{ hid: "resume" }]
    };
  }
};
</script>
