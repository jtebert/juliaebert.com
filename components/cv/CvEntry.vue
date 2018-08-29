<template>
<div class="cv-entry">
  <div class='cv-bar'></div>
    <div class="cv-sidebar">
        <b v-if="location" v-html="location"></b>
        <br v-if="dates || subtitle">
        <span v-if="dates">{{ dates.replace('--', '–') }}</span>
    </div>
    <div class="cv-main">
        <b>{{ title }}</b>
        <br v-if="dates || subtitle">
        <span v-if="subtitle" v-html="subtitle"></span>
    </div>

    <div v-for="(task, id) in tasks" :key="`task-${id}`" class="cv-sidebar"
      :style="{gridRow: id+2}">
        {{ task.date.replace('--', '–') }}
    </div>

    <div v-for="(task, id) in tasks" :key="`task-${id}`" class="cv-main"
      :style="{gridRow: id+2}">
        <span class="cv-task">
          <i class="mdi mdi-chevron-right"></i><span v-html="task.task"></span>
        </span>
    </div>

</div>
</template>

<script>
export default {
  props: ["title", "subtitle", "location", "dates", "tasks"],
  computed: {
    taskss: function() {
      console.log(this.tasks);
      return this.tasks;
    }
  }
};
</script>

<style lang="scss">
</style>