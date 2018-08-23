<template>
    <page-content
        title="Curriculum Vitae">

        <p slot="intro">
            <a href="" class="mdi mdi-file-pdf"> View as PDF</a>
        </p>
        <div slot="content">
            Hello, world.
        </div>
    </page-content>

</template>

<script>
import PageContent from "~/components/PageContent.vue";
import PublicationList from "~/components/PublicationList.vue";

export default {
  components: {
    PageContent,
    PublicationList
  }
};
</script>