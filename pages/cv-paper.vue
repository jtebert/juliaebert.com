<template>
<cv-content :isPaper="true"></cv-content>
</template>

<script>
import cvContent from "~/pages/cvContent.vue";

export default {
  components: {
    cvContent
  },
  layout: "paper"
};
</script>
