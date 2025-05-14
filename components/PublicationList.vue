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

<script setup>
import { computed, ref } from 'vue'
import Publication from "~/components/Publication.vue"
import citationsData from "~/assets/publications.json"
import _ from "lodash"

const props = defineProps({
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
})

const citations = ref(citationsData)

const publications = computed(() => {
  const ret = Object.keys(citations.value)
    .filter((key) => pubFilter(key, citations.value[key]))
    .map((key) => {
      const val = citations.value[key]
      val.key = key
      return val
    })
  const ret_sorted = _.sortBy(ret, [(pub) => -pub.year])
  return ret_sorted
})

const publicationsByYear = computed(() => {
  const pub_year_obj = publications.value.reduce((o, val) => {
    o[val.year] += [val]
    return o
  }, {})
  return Object.keys(pub_year_obj)
    .map((year) => {
      const p = {}
      p["publications"] = pub_year_obj[year]
      p["year"] = year
      return p
    })
    .sort((a, b) => b.year - a.year)
})

function pubFilter(key, pub) {
  return (
    (!props.pubKeyFilter ||
      props.pubKeyFilter.includes(key)) &&
    (!props.typeFilter ||
      props.typeFilter.includes(pub.type)) &&
    (!props.keywordFilter ||
      (pub.keywords &&
        props.keywordFilter.filter((v) => pub.keywords.includes(v)).length > 0))
  )
}
</script>

<style lang="scss">
</style>