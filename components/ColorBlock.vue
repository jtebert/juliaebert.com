<template>
    <div class="color-block-wrapper">
        <div :class="['color-block', 'is-'+color]"></div>
        <div :class="['color-block', 'is-'+color+'-light']" v-if="showLight"></div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  color: { type: String },
  showLight: { type: Boolean, default: true },
});
</script>