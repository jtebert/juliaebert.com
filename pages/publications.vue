<template>
  <primary-section
    :title="title"
    subtitle="Making the world a better place, one peer-reviewed article at a time"
    texture="bank-note"
  >
    <template #links>
        <icon-button-link
          to="https://scholar.google.com/citations?user=dsoLpEQAAAAJ&hl=en"
          icon="school"
        >Google Scholar</icon-button-link>
    </template>
    <div class="block-content content">
      <h1 class="is-size-1">Dissertation</h1>
      <publication-list highlight-author="Ebert" :type-filter="['phdthesis']"/>
      <h1 class="is-size-1">Papers</h1>
      <publication-list highlight-author="Ebert" :type-filter="['inproceedings', 'article']"/>
      <h1 class="is-size-1">Conference Abstracts and Posters</h1>
      <publication-list highlight-author="Ebert" :type-filter="['poster']"/>
    </div>
  </primary-section>
</template>

<script setup>
import PublicationList from "~/components/PublicationList.vue";
import PrimarySection from "~/components/PrimarySection.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";
import { usePageTitle } from '~/composables/usePageTitle';
import { ref } from 'vue';

const title = ref("Publications");

useHead({
  title: usePageTitle(title.value),
  meta: [{ hid: "publications" }],
});
</script>