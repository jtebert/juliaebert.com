<template>
<div class="cv-award is-fixed">
    <div class="cv-sidebar">
        {{ date }}
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
