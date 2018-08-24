<template>
<div class="cv-skill">
    <div class="cv-sidebar">
        <b>{{ category }}</b>
    </div>
    <div class="cv-bar"></div>
    <div class="cv-main">
        {{ skills.join(' &bull; ') }}
    </div>
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