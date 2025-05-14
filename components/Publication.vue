<template>
  <p :class="['publication', {'has-download': showLink}]" :id="json.key">
    <span class="download-link" v-if="showLink">
      <a v-if="json.file" title="View" :class="['mdi', iconName]" :href="file"></a>
      <i v-else :class="['mdi', iconName]"></i>
    </span>
    <span class="citation" v-if="format=='full'">
      <span class="author" v-html="authorsFirstLast+'. '"></span>
      <span class="year" v-if="json.year" v-html="json.year+'. '"></span>
      <span class="pubtitle" v-html="title"></span>
      <span class="publisher-info" v-if="pubInfo" v-html="pubInfo"></span>
      <span class="location" v-if="json.location" v-html="json.location+'. '"></span>
      <span class="doi is-screen-only" v-if="json.doi" v-html="doi"></span>
      <span class="note" v-if="json.note" v-html="json.note+'.'"></span>
      <i class="is-print-only"><a v-if="json.file" :href="absoluteFile" class="link mdi mdi-link-variant is-link-only"></a></i>
    </span>
    <span v-else>
      <span class="author" v-html="authorsFirstLast+'. '"></span>
      <span class="year" v-if="json.year" v-html="'('+json.year+') '"></span>
      <span class="pubtitle" v-html="json.title+'. '"></span>
      <span class="publisher-info" v-if="pubInfo" v-html="shortPubInfo+'. '"></span>
      <i class="is-print-only"><a v-if="json.file" :href="absoluteFile" class="link mdi mdi-link-variant is-link-only"></a></i>
    </span>
  </p>
</template>

<script setup>
import { computed } from 'vue'
import { useRuntimeConfig } from '#app'

const props = defineProps({
  json: Object,
  highlightAuthor: String,
  showLink: {
    type: Boolean,
    default: true,
  },
  format: {
    type: String,
  },
})

const config = useRuntimeConfig()

const iconName = computed(() => {
  switch (props.json.type) {
    case "poster":
      return "mdi-file mdi-rotate-90"
    case "article":
      return "mdi-book"
    case "inproceedings":
      return "mdi-book"
    case "phdthesis":
      return "mdi-book-open-page-variant"
    default:
      return "mdi-download"
  }
})

const absoluteFile = computed(() => {
  return config.public.baseURL + file.value
})

const file = computed(() => {
  return "/pdfs/" + props.json.type + "/" + props.json.file
})

const authorsFirstLast = computed(() => {
  const authorList = props.json.author
  const authorsFormatted = authorList.map(authorFILast)

  let highlightAuthorInd = -1
  if (props.highlightAuthor) {
    highlightAuthorInd = authorList.findIndex((n) =>
      n.includes(props.highlightAuthor)
    )
    authorsFormatted[highlightAuthorInd] =
      "<span class='highlight-author'>" +
      authorsFormatted[highlightAuthorInd] +
      "</span>"
  }

  if (props.format == "short") {
    if (authorsFormatted.length == 1) {
      return authorsFormatted[0]
    } else if (highlightAuthorInd == -1) {
      const lastAuthor = authorsFormatted.pop()
      return authorsFormatted.join(", ") + ", and " + lastAuthor
    } else if (highlightAuthorInd == 0) {
      return authorsFormatted[0] + " et al"
    } else {
      const preHighlightAuthors = authorsFormatted.slice(
        0,
        highlightAuthorInd + 1
      )
      return preHighlightAuthors.join(", ") + " et al"
    }
  } else if (props.format == "full") {
    if (authorsFormatted.length > 1) {
      const lastAuthor = authorsFormatted.pop()
      return authorsFormatted.join(", ") + ", and " + lastAuthor
    } else {
      return authorsFormatted
    }
  }
})

const title = computed(() => {
  return '"'+props.json.title+'." '
})

const thesisInfo = computed(() => {
  if (props.json.type == "phdthesis") {
    return 'PhD Dissertation, ' + props.json.school
  } else {
    return ""
  }
})

const pubInfo = computed(() => {
  const pubInfoArr = [
    pubLocation.value,
    props.json.volume,
    props.json.number,
    thesisInfo.value
  ].filter((n) => n)

  if (issueDate.value) {
    pubInfoArr[pubInfoArr.length - 1] += " " + issueDate.value
  }
  if (pages.value) {
    pubInfoArr.push(pages.value)
  }
  if (pubInfoArr.length > 0) {
    return pubInfoArr.join(", ") + ". "
  }
})

const shortPubInfo = computed(() => {
  if (props.json.short_booktitle) {
    return `<i>${props.json.short_booktitle}</i>`
  } else if (props.json.short_journal) {
    return `<i>${props.json.short_journal}</i>`
  } else {
    return pubInfo.value
  }
})

const pubLocation = computed(() => {
  if (props.json.booktitle) {
    const t = `<i>${props.json.booktitle}</i>`
    if (props.json.type === "poster") {
      return "Poster at " + t
    } else if (props.json.type === "inproceedings") {
      return "In " + t
    } else {
      return t
    }
  } else if (props.json.journal) {
    return `<i>${props.json.journal}</i>`
  }
})

const pages = computed(() => {
  if (props.json.pages) {
    return props.json.pages.replace("--", "–")
  }
})

const date = computed(() => {
  if (props.json.year) {
    return props.json.year.replace("--", "–")
  }
})

const issueDate = computed(() => {
  if (props.json.issue_date) {
    return "(" + props.json.issue_date.replace("--", "–") + ")"
  }
})

const addendum = computed(() => {
  if (props.json.addendum) {
    return props.json.addendum.replace("--", "–")
  }
})

const doi = computed(() => {
  const doiUrl = "https://doi.org/" + props.json.doi
  return `DOI: <a href="${doiUrl}">${props.json.doi}</a>`
})

function authorLastFI(name) {
  const [lastName, firstName] = name.split(",").map((n) => n.trim())
  const initialsSpaced = firstName
    .split(" ")
    .map((n) => n.charAt(0))
    .join(". ")
  const firstInitials = initialsSpaced
    .split("-")
    .map((n) => n.charAt(0) + ".")
    .join(".-")
  return lastName + " " + firstInitials
}

function authorFILast(name) {
  const [lastName, firstName] = name.split(",").map((n) => n.trim())
  const initialsSpaced = firstName
    .split(" ")
    .map((n) => n.charAt(0))
    .join(". ")
  const firstInitials = initialsSpaced
    .split("-")
    .map((n) => n.charAt(0))
    .join("-")
  return firstInitials + " " + lastName
}

function authorFirstLast(name) {
  const [lastName, firstName] = name.split(",").map((n) => n.trim())
  return firstName + " " + lastName
}
</script>

<style lang="scss">
</style>