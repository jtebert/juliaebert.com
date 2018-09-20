<template>
<p :class="['publication', {'has-download': showLink}]">
    <span class="download-link" v-if=showLink>
        <a v-if="json.file" :class="['mdi', iconName]" :href=file></a>
        <i v-else :class="['mdi', iconName]"></i>
    </span>
    <span class="citation">
        <span class="author" v-html="authorsLastFI"></span>
        <span class="pubtitle" v-html="articleTitle"></span>
        <span class="booktitle" v-if="json.booktitle" v-html="bookTitle"></span>
        <span class="organization" v-if="json.organization">, {{ json.organization }}</span>
        <span class="year" v-if="json.year" v-html="', '+json.year"></span>
        <span class="pages" v-if="json.pages" v-html="pages"></span>
        <span class="note" v-if="json.note" v-html="', '+json.note"></span>
        <span class="addendum" v-if="json.addendum" v-html="addendum">,</span>
        <span class="address" v-if="json.address">, {{ json.address }}</span>.
    </span>
</p>
</template>

<script>
// This is designed to be used within another compononent (PublicationList),
// which passes just a dictionary of values for a particular publication. This
// compononent should not be used directly.
export default {
  props: {
    json: Object,
    highlightAuthor: String,
    showLink: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    iconName: function() {
      // Get the name of the MDI icon depending on the file type
      switch (this.json.type) {
        case "poster":
          return "mdi-file mdi-rotate-90";
        case "paper":
          return "mdi-book";
      }
    },
    file: function() {
      return "/pdfs/" + this.json.type + "/" + this.json.file;
    },
    authorsLastFI: function() {
      // Produce string of authors in the form: Last, F. M., Last2, F. M., ...
      var authorList = this.json.author;
      var authorsFormatted = authorList.map(this.authorLastFI);
      // Highlight any authors that include the specified string by wrapping
      // it in a span with the class "highlight-author" (which can then be formatted
      // with CSS)
      if (this.highlightAuthor) {
        var highlightAuthorInd = authorList.findIndex(n =>
          n.includes(this.highlightAuthor)
        );
        authorsFormatted[highlightAuthorInd] =
          "<span class='highlight-author'>" +
          authorsFormatted[highlightAuthorInd] +
          "</span>";
      }
      return authorsFormatted.join(", ");
    },
    articleTitle: function() {
      return ', "' + this.json.title + '"';
    },
    bookTitle: function() {
      return ", in <i>" + this.json.booktitle + "</i>";
    },
    pages: function() {
      return ", pp. " + this.json.pages.replace("--", "–");
    },
    date: function() {
      return this.json.year.replace("--", "–");
    },
    addendum: function() {
      return ", " + this.json.addendum.replace("--", "–");
    }
  },
  methods: {
    authorLastFI: function(name) {
      // Format an input string "Last, First Middles..." as "Last, F. M."
      // Includes separation at hyphens ("Last, First-Mid" -> "Last, F.-M.")
      var lastName, firstName;
      var authorSplit = name.split(",");
      [lastName, firstName] = authorSplit.map(n => n.trim());
      var initialsSpaced = firstName
        .split(" ")
        .map(n => n.charAt(0))
        .join(". ");
      var firstInitials = initialsSpaced
        .split("-")
        .map(n => n.charAt(0) + ".")
        .join(".-");
      return lastName + " " + firstInitials;
    }
  }
};
</script>

<style lang="scss">
</style>