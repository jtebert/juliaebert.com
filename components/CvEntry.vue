<template>
<div class="cv-entry is-fixed">
    <div class="has-text-right">
        <b v-if="location" v-html="location"></b>
        <br v-if="date || subtitle">
        <span v-if="date">{{ date }}</span>
    </div>
    <div>
        <b>{{ title }}</b>
        <br v-if="date || subtitle">
        <span v-if="subtitle" v-html="subtitle"></span>
    </div>

    <div v-for="{date, task, id} in tasks" :key="id" class="cv-sidebar" :style="{gridRow: id+1}">
        {{ date }}
    </div>

    <div v-for="{date, task, id} in tasks" :key="id" class="cv-main" :style="{gridRow: id+1}">
        <span class="cv-task"><i class="mdi mdi-chevron-right"></i>{{ task }}</span>
    </div>

</div>
</template>

<script>
export default {
  props: ["title", "subtitle", "location", "dates", "tasks"]
};
</script>

<style lang="scss">
.cv-entry,
.cv-skills,
.cv-award {
  margin-bottom: 1rem;
  display: grid;
  grid-gap: 2 * $gap;
  grid-template-rows: auto;
  grid-template-columns: [sidebar] auto [main] 1fr;
  .is-fixed {
    grid-template-columns: 200px 1fr;
  }
  .cv-sidebar {
    grid-column: sidebar;
  }
  .cv-main {
    grid-column: main;
  }
  .cv-task {
    display: block;
    position: relative;
    padding-left: calc(3rem + 1.5em);
    .mdi,
    .fa {
      position: absolute;
      left: 3rem;
    }
  }
}
</style>