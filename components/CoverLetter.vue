<template>
    <div class="content is-printable" id="cover-letter">
        <resume-header
            name="Julia Ebert"
            subtitle="PhD Candidate &bull; Robotics Researcher &bull; Cambridge, MA"
            :links='[
                {to: "https://juliaebert.com", icon: "web", text:"juliaebert.com"},
                {to: "mailto:julia@juliaebert.com", icon: "email", text:"julia@juliaebert.com"},
                {to: "https://github.com/jtebert", icon: "github", text:"github.com/jtebert"},
                //{to: "https://linkedin.com/in/jtebert", icon: "linkedin", text:"linkedin.com/in/jtebert"},
                // {icon: "phone", text:"617-949-0214"}
            ]'
        />

        <div id="cover-letter-content">
            <p>{{ date }}</p>

            <div id="address">
                <p v-html="address"></p>
            </div>

            <slot/>
        </div>

    </div>
</template>

<script setup>
import ResumeHeader from "~/components/cv/ResumeHeader.vue";
import { usePageTitle } from '~/composables/usePageTitle';
import { ref } from 'vue';

const props = defineProps({
  date: String,
  address: String
});

const title = ref("Cover Letter");

useHead({
  title: usePageTitle(title.value),
  meta: [{ hid: "cover-letter" }]
});
</script>

<style>
#cover-letter-content {
  margin-top: 4em;
  font-size: 10pt !important;
}
</style>