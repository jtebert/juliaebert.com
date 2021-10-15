<template>
    <div class="content is-printable" id="cover-letter">
        <resume-header
            name="Julia Ebert"
            subtitle="PhD Candidate &bull; Robotics Researcher &bull; Cambridge, MA"
            :links='[
                {to: "https://juliaebert.com", icon: "web", text:"juliaebert.com"},
                {to: "mailto:julia@juliaebert.com", icon: "email", text:"julia@juliaebert.com"},
                {to: "https://github.com/jtebert", icon: "github-circle", text:"github.com/jtebert"},
                //{to: "https://linkedin.com/in/jtebert", icon: "linkedin", text:"linkedin.com/in/jtebert"},
                {icon: "phone", text:"617-949-0214"}
            ]'
        ></resume-header>

        <div id="cover-letter-content">
            <p>{{ date }}</p>

            <div id="address">
                <p v-html="address"></p>
            </div>

            <slot></slot>
        </div>

    </div>
</template>

<script>
import PrimarySection from "~/components/PrimarySection.vue";
import ResumeHeader from "~/components/cv/ResumeHeader.vue";
import { Previewer } from "pagedjs";

export default {
  components: {
    PrimarySection,
    ResumeHeader,
  },
  props: ["date", "address"],
  computed: {},

  data() {
    return { title: "Cover Letter" };
  },
  head() {
    return {
      title: this.title + " - " + process.env.siteTitle,
      meta: [{ hid: "cover-letter" }],
    };
  },
};

if (process.client) {
  let paged = new Previewer();
  document.addEventListener("DOMContentLoaded", function () {
    let flow = paged
      .preview(
        "", // use everything/default
        // document.getElementsByClassName("content is-printable")[0],
        // ["/assets/sass/main.scss"],
        // ["/paged.css"], // css
        "", // use inline css (which is where main.scss ends up (in <style></style>))
        document.body // output
      )
      .then((flow) => {
        console.log("Rendered", flow.total, "pages.");
      });
  });
}
</script>

<style>
#cover-letter-content {
  margin-top: 4em;
  font-size: 10pt !important;
}
</style>