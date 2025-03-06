<template>
  <a :class="['icon-link', 'mdi', iconSize, 'mdi-'+icon]" :href="to">&nbsp;&nbsp;
    <slot/>
  </a>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: "link-variant" },
    to: { type: String, default: '' },
    size: { type: String, default: "24px" }
  },
  computed: {
    iconSize: function() {
      return this.size ? "mdi-" + this.size : "mdi-24px";
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
