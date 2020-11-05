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
    >
      <span v-if="task.date">{{ task.date.replace('--', '–') }}</span>
    </div>

    <div
      v-for="(task, id) in tasks"
      :key="'task-'+uid+'-main-'+`${id}`"
      :class="['cv-main', 'grid-row-'+(id+rowOffset)]"
    >
      <span class="cv-task" v-bind:class="{ bulleted: bulleted }">
        <i v-if="bulleted" class="bullet mdi mdi-chevron-right"></i>
        <span v-if="!task.date&!task.description" v-html="task"></span>
        <span v-else v-html="task.task"></span>
        <a v-if="task.link" :href="task.link"><i class="link mdi mdi-rotate-315 mdi-link"></i><br></a>
        <nuxt-link class="is-screen-only" v-else-if="task.to" :to="task.to"><i class="link mdi mdi-rotate-315 mdi-link"></i><br></nuxt-link>
        <i v-if="task.description"><span class="cv-description" v-html="task.description"></span></i>
        <!-- <a v-else-if="task.to" :href="'https://juliaebert.com'+task.to"><i class="link mdi mdi-rotate-315 mdi-link"></i><br></a> -->
      </span>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    // Main header for the CV entry (eg employer)
    title: String,
    // Secondary header for entry (eg position)
    subtitle: String,
    // City/state/country of the position (shown in sidebar, hidden on mobile)
    location: String,
    // Optional dates for the entire position (rather than for the bulleted points)
    dates: [String, Number],
    // Overall description for the position (shown in small, unbulleted text)
    description: String,
    // Bulleted list of tasks/roles in the entry. Each task may be:
    // - A String (shorthand for just the task below)
    // - An Object containing: (optional unless noted)
    //   - task: (required) Description of the task
    //   - description: Additional short detail about task (will be in smaller text)
    //   - date: Dates of task (will be in sidebar)
    //   - link: EXTERNAL link (shown next to task)
    //   - to: INTERNAL to website link (shown next to task). Don't use both `to` and `link`
    tasks: Array,
    // Whether or not the tasks are bulleted
    bulleted: {
      type: Boolean,
      default: true,
    },
    // Whether to show the task items before the description/subtitle
    tasksFirst: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rowOffset() {
      return 3;
    },
    uid() {
      // This is a hacky way to give each CV item a pseudo-unique ID (generated
      // at runtime) so that there are keys to make Vue happy.
      return Math.floor((Math.random() * 2) ^ 32) + 1;
    },
    subtitleRow() {
      if (this.tasksFirst) {
        return this.tasks.length + this.rowOffset;
      } else {
        return this.rowOffset - 1;
      }
    },
  },
};
</script>

<style>
.cv-description {
  display: block;
  font-size: 0.85em;
  line-height: 1.25em;
  margin-bottom: 0.5em;
}
</style>
