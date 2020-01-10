<template>
  <div class="cv-entry">
    <div class="cv-bar"></div>
    <div class="cv-sidebar entry-primary">
      <b v-if="location" v-html="location" class="location"></b>
    </div>
    <div class="cv-main entry-primary">
      <b>{{ title }}</b>
    </div>
    <div :class="['cv-sidebar', 'entry-subtitle', 'grid-row-'+subtitleRow]">
      <span v-if="dates" v-html="dates.replace('--', '–')"></span>
    </div>
    <div :class="['cv-main', 'entry-subtitle', 'grid-row-'+subtitleRow]">
      <span v-if="subtitle" v-html="subtitle"></span>
    </div>
    <div
      v-for="(task, id) in tasks"
      :key="'task-'+uid+'-sidebar-'+`${id}`"
      :class="['cv-sidebar', 'grid-row-'+(id+rowOffset)]"
    ><span v-if="task.date">{{ task.date.replace('--', '–') }}</span></div>
    <div
      v-for="(task, id) in tasks"
      :key="'task-'+uid+'-main-'+`${id}`"
      :class="['cv-main', 'grid-row-'+(id+rowOffset)]"
    >
      <span class="cv-task" v-bind:class="{ bulleted: bulleted }">
        <i v-if="bulleted" class="mdi mdi-chevron-right"></i>
        <span v-if="!task.date&!task.description" v-html="task"></span>
        <span v-else v-html="task.task"></span><br>
        <i><span class="cv-description" v-html="task.description"></span></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    location: String,
    dates: [String, Number],
    tasks: Array,
    description: String,
    bulleted: {
      type: Boolean,
      default: true
    },
    tasksFirst: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rowOffset: function() {
      return 3;
    },
    uid: function() {
      return Math.floor((Math.random() * 2) ^ 32) + 1;
    },
    subtitleRow: function() {
      if (this.tasksFirst) {
        return this.tasks.length + this.rowOffset;
      } else {
        return this.rowOffset - 1;
      }
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
