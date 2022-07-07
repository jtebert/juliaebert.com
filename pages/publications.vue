<template>
  <primary-section
    :title="title"
    subtitle="Making the world a better place, one peer-reviewed article at a time"
    texture="bank-note"
  >
    <div slot="links">
        <icon-button-link
          to="https://scholar.google.com/citations?user=dsoLpEQAAAAJ&hl=en"
          icon="school"
        >Google Scholar</icon-button-link>
    </div>
    <div class="block-content content">
      <h1>Dissertation</h1>
      <publication-list highlight-author="Ebert" :type-filter="['phdthesis']"></publication-list>
      <h1>Papers</h1>
      <publication-list highlight-author="Ebert" :type-filter="['inproceedings', 'article']"></publication-list>
      <h1>Conference Abstracts and Posters</h1>
      <publication-list highlight-author="Ebert" :type-filter="['poster']"></publication-list>
    </div>
  </primary-section>
</template>

<script>
import PublicationList from "~/components/PublicationList.vue";
import PrimarySection from "~/components/PrimarySection.vue";
import IconButtonLink from "~/components/IconButtonLink.vue";

export default {
  components: {
    IconButtonLink,
    PrimarySection,
    PublicationList,
  },
  data() {
    return { title: "Publications" };
  },
  head() {
    return {
      title: this.title + " - " + process.env.siteTitle,
      meta: [{ hid: "publications" }],
    };
  },
};
</script>