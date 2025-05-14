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

<script setup>
import { computed } from 'vue'

const props = defineProps({
  category: { type: String },
  skills: { type: Array },
})

const skillsHTML = computed(() => {
  return props.skills.join(" &bull; ")
})
</script>

<style lang="scss">
</style>