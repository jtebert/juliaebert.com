<template>
  <a :class="['icon-link', 'mdi', iconSize, 'mdi-'+icon]" :href="to">&nbsp;&nbsp;
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    icon: { default: "link-variant" },
    to: { type: String },
    size: { default: "24px" }
  },
  computed: {
    iconSize: function() {
      if (this.size) {
        return "mdi-" + this.size;
      }
    }
  }
};
</script>

<style lang="scss">
.icon-link {
  display: flex;
  align-items: center;
  font-weight: 500;
  width: max-content;
}
</style>
