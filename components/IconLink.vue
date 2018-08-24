<template>
    <a :class="['icon-link', 'mdi', 'mdi-24px', 'mdi-'+icon]" :href="to">
        &nbsp;&nbsp;<slot></slot>
    </a>

</template>

<script>
export default {
  props: {
    icon: { default: "link-variant" },
    to: { type: String }
  }
};
</script>

<style lang="scss">
.icon-link {
  display: flex;
  align-items: center;
}
</style>
