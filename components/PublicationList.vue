<template>
  <div class="publication-list">
    <publication
      v-for="pub in publications"
      :key="pub.key"
      :json="pub"
      :highlightAuthor="highlightAuthor"
      :format="format"
      :showLink="showLinks"
    />
  </div>
</template>

<script>
import Publication from "~/components/Publication";
// https://stackoverflow.com/a/47958533
import citations from "~/assets/publications.json";
import _ from "lodash";

export default {
  components: {
    Publication,
  },
  props: {
    typeFilter: Array,
    pubKeyFilter: Array,
    keywordFilter: Array,
    showYears: {
      type: Boolean,
      default: false,
    },
    highlightAuthor: String,
    showLinks: {
      type: Boolean,
      default: true,
    },
    format: {
      type: String,
      default: "full",
    },
  },
  data() {
    return {
      citations: citations,
    };
  },
  computed: {
    publications: function () {
      // Get an array of all the publications from the file that match the specification
      // NB: The output does not retain the pubKeys
      // Filter the citation keys based on all the specified filters
      // Then map these keys to their corresponding values
      //   console.log(this.citations);
      //sorted = this.publicationsByYear();
      const ret = Object.keys(this.citations)
        .filter((key) => this.pubFilter(key, this.citations[key]))
        .map((key) => {
          const val = this.citations[key];
          val.key = key;
          return val;
        });
      const ret_sorted = _.sortBy(ret, [(pub) => -pub.year]);
      return ret_sorted;
    },
    publicationsByYear: function () {
      // Key the publications into an object by year (to be used if showYears is true)
      const pub_year_obj = this.publications.reduce((o, val) => {
        o[val.year] += [val];
        return o;
      }, {});
      // Then return a sorted list by year, in descending order (newest to oldest)
      return Object.keys(pub_year_obj)
        .map((year) => {
          const p = {};
          p["publications"] = pub_year_obj[year];
          p["year"] = year;
          return p;
        })
        .sort((a, b) => b.year - a.year);
    },
  },
  methods: {
    pubFilter(key, pub) {
      // Check whether the publication meets all the filter requirements
      return (
        (!this.pubKeyFilter || // If there's a pubKey filter...
          this.pubKeyFilter.includes(key)) && // ... the filter must include this pub's key
        (!this.typeFilter || // And if there's a type filter...
          this.typeFilter.includes(pub.type)) && // ... the filter must include this pub's type
        (!this.keywordFilter || // And if there's a keyword filter...
          (pub.keywords && // ... the pub must have keywords and ...
            // ...there must be a non-empty intersection between the keyword filter
            //    and the pub's keywords
            this.keywordFilter.filter((v) => pub.keywords.includes(v)).length >
              0))
      );
    },
  },
};
</script>

<style lang="scss">
</style>