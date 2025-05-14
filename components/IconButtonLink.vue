<template>
<div>
  <nuxt-link v-if="isInternal" :to="to" :class="linkClasses">
    <span class="icon"><i :class="iconClasses"/></span>
    <span v-if="hasText"><slot/></span>
  </nuxt-link>
  <!-- <a v-else :class="['button', 'is-primary', {'is-large': !hasText}, {'is-medium': hasText}]" :href="to"> -->
  <a v-else :class="linkClasses" :href="to">
    <span class="icon"><i :class="iconClasses"/></span>
    <span v-if="hasText"><slot/></span>
  </a>
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue';

const props = defineProps({
  icon: { type: String, default: '' },
  to: { type: String, default: '' },
  isInternal: { type: Boolean, default: false },
});

const slots = useSlots();
const hasText = computed(() => slots.default);
const iconSize = computed(() => hasText.value ? 24 : 36);
const iconClasses = computed(() => `mdi mdi-${props.icon} mdi-${iconSize.value}px`);
const linkClasses = computed(() => {
  let classes = "button is-primary";
  if (!hasText.value) {
    classes += " is-large";
  } else {
    classes += " is-medium";
  }
  return classes;
});
</script>

<style lang="scss">
</style>
