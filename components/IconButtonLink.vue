<template>
  <a :class="['button', 'is-primary', {'is-large': !hasText}, {'is-medium': hasText}]" :href="to">
    <span class="icon">
      <i :class="['mdi', 'mdi-'+icon, 'mdi-'+iconSize+'px']"></i>
    </span>
    <span v-if="hasText">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  props: ["icon", "to"],
  computed: {
    hasText: function() {
      return this.$slots.default;
    },
    iconSize: function() {
      if (this.hasText) {
        return 24;
      } else {
        return 36;
      }
    }
  }
};
</script>

<style lang="scss">
</style>
