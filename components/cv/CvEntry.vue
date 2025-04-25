<template>
  <div class="cv-entry">
    <div class="cv-bar"/>
    <div class="cv-sidebar entry-primary">
      <b v-if="location" class="location" v-html="location"/>
    </div>
    <div class="cv-main entry-primary">
      <b v-html="title"/>
    </div>
    <div :class="['cv-sidebar', 'entry-subtitle', 'grid-row-'+subtitleRow]">
      <span v-if="dates" v-html="dates.replace('--', '–')"/>
    </div>
    <div :class="['cv-main', 'entry-subtitle', 'grid-row-'+subtitleRow]">
      <span v-if="subtitle" v-html="subtitle"/>
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
      <span class="cv-task" :class="{ bulleted: bulleted }">
        <i v-if="bulleted" class="bullet mdi mdi-chevron-right"/>
        <span v-if="typeof(task)=='string'" v-html="task"/> <!--If it's just a string -->
        <span v-else v-html="task.task"/> <!-- If it's an object -->
        <a v-if="task.hasOwnProperty('link')" :href="task.link"><i class="link mdi mdi-link-variant is-link-only"/><br></a>
        <nuxt-link v-else-if="task.hasOwnProperty('to')" class="is-screen-only" :to="task.to"><i class="link md mdi-link-variant is-link-only"/><br></nuxt-link>
        <i v-if="task.hasOwnProperty('description')"><span class="cv-description" v-html="task.description"/></i>
      </span>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  // Main header for the CV entry (eg employer)
  title: {
    type: String,
    default: '',
  },
  // Secondary header for entry (eg position)
  subtitle: {
    type: String,
    default: '',
  },
  // City/state/country of the position (shown in sidebar, hidden on mobile)
  location: {
    type: String,
    default: '',
  },
  // Optional dates for the entire position (rather than for the bulleted points)
  dates: {
    type: [String, Number],
    default: '',
  },
  // Overall description for the position (shown in small, unbulleted text)
  description: {
    type: String,
    default: '',
  },
  // Bulleted list of tasks/roles in the entry. Each task may be:
  // - A String (shorthand for just the task below)
  // - An Object containing: (optional unless noted)
  //   - task: (required) Description of the task
  //   - description: Additional short detail about task (will be in smaller text)
  //   - date: Dates of task (will be in sidebar)
  //   - link: EXTERNAL link (shown next to task)
  //   - to: INTERNAL to website link (shown next to task). Don't use both `to` and `link`
  tasks: {
    type: Array,
    default: () => [],
  },
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
});

const rowOffset = ref(3);
const uid = ref(Math.floor((Math.random() * 2) ^ 32) + 1);
const subtitleRow = computed(() => {
  if (props.tasksFirst) {
    return props.tasks.length + rowOffset.value;
  } else {
    return rowOffset.value - 1;
  }
});
</script>

<style>
.cv-description {
  display: block;
  font-size: 0.85em;
  line-height: 1.25em;
  margin-bottom: 0.5em;
}
</style>
