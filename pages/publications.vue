<template>
    <div
        title="Publications">

        <div slot="content">
            <h1>Papers</h1>
            <publication-list
                highlight-author="Ebert"
                :type-filter="['paper']">
            </publication-list>

            <h1>Conference Abstracts and Posters</h1>
            <publication-list
                highlight-author="Ebert"
                :type-filter="['poster']">
            </publication-list>

        </div>
    </div>

</template>

<script>
import PublicationList from "~/components/PublicationList.vue";

export default {
  components: {
    PublicationList
  }
};
</script>