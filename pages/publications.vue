<template>
    <page-content
        title="Publications">

        <p slot="intro">

        </p>

        <div slot="content">
            <h1>Papers</h1>
            <publication-list
                highlight-author="Ebert"
                :type-filter="['paper']">
            </publication-list>

            <h1>Posters</h1>
            <publication-list
                highlight-author="Ebert"
                :type-filter="['poster']">
            </publication-list>

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