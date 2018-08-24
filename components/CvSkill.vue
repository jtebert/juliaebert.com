<template>
<div class="cv-skills">
    <div class="cv-sidebar">
        {{ category }}
    </div>
    <div class="cv-main">
        {{ skills.join(' &middot; ') }}
    </div>

    <cv-skill
        dates="2016--2017"
        task="Take out the trash">
    </cv-skill>

</div>
</template>

<script>
export default {
  props: {
    category: { type: String },
    skills: { type: Array }
  }
};
</script>

<style lang="scss">
</style>