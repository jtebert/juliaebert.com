<template>
    <div class="content is-printable">
      <resume-content></resume-content>
    </div>
</template>

<script>
import resumeContent from "~/pages/resumeContent.vue";
import { Previewer } from "pagedjs";

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
