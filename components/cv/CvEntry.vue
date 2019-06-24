<template>
  <div class="cv-entry">
    <div class="cv-bar"></div>
    <div class="cv-sidebar entry-primary">
      <b v-if="location" v-html="location" class="location"></b>
      <br v-if="dates || subtitle" class="location">
      <span v-if="dates" v-html="dates.replace('--', '–')"></span>
    </div>
    <div class="cv-main entry-primary">
      <b>{{ title }}</b>
      <br v-if="dates || subtitle">
      <span v-if="subtitle" v-html="subtitle"></span>
    </div>
    <div
      v-for="(task, id) in tasks"
      :key="'task-'+uid+'-sidebar-'+`${id}`"
      :class="['cv-sidebar', 'grid-row-'+(id+2)]"
    >{{ task.date.replace('--', '–') }}</div>
    <div
      v-for="(task, id) in tasks"
      :key="'task-'+uid+'-main-'+`${id}`"
      :class="['cv-main', 'grid-row-'+(id+2)]"
    >
      <span class="cv-task">
        <i class="mdi mdi-chevron-right"></i>
        <span v-html="task.task"></span><br>
        <i><span class="cv-description" v-html="task.description"></span></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "location", "dates", "tasks", "description"],
  computed: {
    uid: function() {
      return Math.floor((Math.random() * 2) ^ 32) + 1;
    }
  }
};
</script>

<style>
.cv-description {
  font-size: 0.85em;
  line-height: 1em;
}
</style>
