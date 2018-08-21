<template>
  <page-content
    title="Programming">
    <project
        :img-src="require('~/assets/imgs/programming/lazy-baker.png')"
        title="Hello, World">
      <div slot="content">
      </div>
    </project>
  </page-content>
</template>

<script>
import PageContent from "~/components/PageContent.vue";
import Project from "~/components/Project.vue";

export default {
  components: {
    Project,
    PageContent
  }
};
</script>

