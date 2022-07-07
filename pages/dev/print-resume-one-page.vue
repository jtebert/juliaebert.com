<template>
    <div class="content is-printable dense-resume right-bar-resume">
      <resume-content-one-page></resume-content-one-page>
    </div>
</template>

<script>
import resumeContentOnePage from "~/pages/resumeContentOnePage.vue";
import { Previewer } from "pagedjs";

export default {
  components: {
    resumeContentOnePage,
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

if (process.client) {
  let paged = new Previewer();
  document.addEventListener("DOMContentLoaded", function () {
    let flow = paged
      .preview(
        "", // use everything/default
        "", // use inline css (which is where main.scss ends up (in <style></style>))
        document.body // output
      )
      .then((flow) => {
        console.log("Rendered", flow.total, "pages.");
      });
  });
}
</script>