<template>
    <div class="content is-printable">
        <cv-content></cv-content>
    </div>
</template>

<script>
import cvContent from "~/pages/cvContent.vue";

export default {
  components: {
    cvContent,
  },
  data() {
    return { title: "Resume" };
  },
  head() {
    return {
      title: this.title + " - " + process.env.siteTitle,
      meta: [{ hid: "resume" }],
      script: [
        {
          // Using CDN is slow, but this is just for local printing, so it's fine.
          hid: "paged",
          src: "https://unpkg.com/pagedjs/dist/paged.polyfill.js",
        },
      ],
    };
  },
};
</script>

<style>
.pagedjs_sheet {
  background-color: #fff;
  border-bottom: 1px solid #666;
}
</style>
