<template>
    <div
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