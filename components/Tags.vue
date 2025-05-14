<template>
  <p class="tags">
    <span class="tag is-primary" v-for="(tag, id) in tagList" :key="`tag-${id}`">
      {{ tag }}
    </span>
  </p>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  tags: String
});

const tagList = computed(() => props.tags.split(",").map(t => t.trim()));
</script>
