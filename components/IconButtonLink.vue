<template>
<div>
  <nuxt-link v-if="isInternal" :to="to" :class="linkClasses">
    <span class="icon"><i :class="iconClasses"></i></span>
    <span v-if="hasText"><slot></slot></span>
  </nuxt-link>
  <!-- <a v-else :class="['button', 'is-primary', {'is-large': !hasText}, {'is-medium': hasText}]" :href="to"> -->
  <a v-else :class="linkClasses" :href="to">
    <span class="icon"><i :class="iconClasses"></i></span>
    <span v-if="hasText"><slot></slot></span>
  </a>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String },
    to: { type: String },
    isInternal: { type: Boolean, default: false },
  },
  computed: {
    hasText: function () {
      return this.$slots.default;
    },
    iconSize: function () {
      if (this.hasText) {
        return 24;
      } else {
        return 36;
      }
    },
    iconClasses: function () {
      return `mdi mdi-${this.icon} mdi-${this.iconSize}px`;
    },
    linkClasses: function () {
      var classes = "button is-primary";
      if (!this.hasText) {
        classes += " is-large";
      } else {
        classes += " is-medium";
      }
      if (this.isInternal) {
        console.log("internal");
      } else {
        console.log("external");
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
</style>
