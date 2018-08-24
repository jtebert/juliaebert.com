<template>
<div class="cv-award">
    <div class="cv-sidebar">
        {{ String(date).replace('--', '–') }}
    </div>
    <div class="cv-main" v-html="award"></div>
</div>
</template>

<script>
export default {
  props: ["date", "award"]
};
</script>

<style lang="scss">
</style>
