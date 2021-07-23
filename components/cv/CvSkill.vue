<template>
    <div class="cv-skill">
        <div class="cv-sidebar">
            <b>{{ category }}</b>
        </div>
        <div class="cv-bar"></div>
        <div class="cv-main" v-html="skillsHTML"></div>
        <!-- <div class="cv-main">{{ skills.join(' &bull; ') }}</div> -->
    </div>
</template>

<script>
export default {
  props: {
    category: { type: String },
    skills: { type: Array },
  },
  computed: {
    skillsHTML() {
      return this.skills.join(" &bull; ");
    },
  },
};
</script>

<style lang="scss">
</style>