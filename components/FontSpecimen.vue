<template>
  <div>
    <p class="specimen-intro">
      <i>{{ fontFamily }} {{ fontWeight }}. {{ color }} on {{ backgroundColor }}.</i>
    </p>
    <div class="font-specimen" :style="styleObject">
      <h1 class="title is-1">Lorem Ipsum</h1>
      <h3 class="subtitle is-3"></h3>
      <p>abcdefghijklmnopqrstuvwxyz</p>
      <p>ABCDEFGHIJKLMNOPQRSTUVQXYZ</p>
      <p>'?'"!"(%)[#]{@}/&-+$:;.*</p>
      <p>1234567890</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p></p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  fontFamily: String,
  fontWeight: String,
  color: String,
  backgroundColor: String
})

const styleObject = computed(() => ({
  fontFamily: props.fontFamily,
  fontWeight: props.fontWeight,
  color: props.color,
  backgroundColor: props.backgroundColor
}))
</script>

<style lang="scss">
.specimen-intro {
  font-size: 0.8rem;
  color: $gray;
  margin-bottom: 0.25rem;
}

.font-specimen {
  padding: 1.5rem;
}
</style>