<template>
    <div class="cv-award">
        <div class="cv-sidebar">{{ String(date).replace('--', '–') }}</div>
        <div class="cv-main" v-html="award_link"></div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  date: String,
  award: String,
  link: String
})

const award_link = computed(() => {
  if (props.link) {
    return `${props.award} <a href='${props.link}'><i class="link mdi mdi-link-variant"></i></a>`
  } else {
    return props.award
  }
})
</script>

<style lang="scss">
</style>
