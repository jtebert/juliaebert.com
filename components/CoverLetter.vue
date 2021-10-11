<template>
  <primary-section :title="title" subtitle="Hire me! Available Spring 2022" texture="brick-wall" icon='cv' class="is-printable">
    <div class="block-content content has-margin-large">
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
        <hr>

        <div id="cover-letter-content">
            <p>{{ date }}</p>

            <div id="address">
                <p v-html="address"></p>
            </div>

            <slot></slot>
        </div>

    </div>
    <!-- This is a hacky way to set the page print margins on this page only -->
    <style>
        @page { margin: .75in 1in;}
    </style>
  </primary-section>
</template>

<script>
import PrimarySection from "~/components/PrimarySection.vue";
import ResumeHeader from "~/components/cv/ResumeHeader.vue";

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
</script>

<style scoped>
@media print {
  #cover-letter-content {
    font-size: 1.1em;
  }
}
</style>
