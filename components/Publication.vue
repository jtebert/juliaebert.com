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
      <span class="year" v-if="json.year" v-html="'('+json.year+')'"></span>
      <span class="pubtitle" v-html="json.title+'. '"></span>
      <span class="publisher-info" v-if="pubInfo" v-html="shortPubInfo+'.'"></span>
      <i class="is-print-only"><a v-if="json.file" :href="absoluteFile" class="link mdi mdi-link-variant is-link-only"></a></i>
    </span>
  </p>
</template>

<script>
// This is designed to be used within another component (PublicationList),
// which passes just a dictionary of values for a particular publication. This
// component should not be used directly.
export default {
  props: {
    json: Object,
    highlightAuthor: String,
    showLink: {
      type: Boolean,
      default: true,
    },
    format: {
      type: String,
      // default: "full",
    },
  },
  computed: {
    iconName: function () {
      // Get the name of the MDI icon depending on the file type
      switch (this.json.type) {
        case "poster":
          return "mdi-file mdi-rotate-90";
        case "article":
          return "mdi-book";
        case "inproceedings":
          return "mdi-book";
        case "phdthesis":
          return "mdi-book-open-page-variant";
        default:
          return "mdi-download";
      }
    },
    absoluteFile() {
      return process.env.baseURL + this.file;
    },
    file: function () {
      return "/pdfs/" + this.json.type + "/" + this.json.file;
    },
    authorsFirstLast: function () {
      // Produce string of authors in the form: Last, F. M., Last2, F. M., ...
      var authorList = this.json.author;
      var authorsFormatted = authorList.map(this.authorFILast);
      // Highlight any authors that include the specified string by wrapping
      // it in a span with the class "highlight-author" (which can then be formatted
      // with CSS)
      var highlightAuthorInd = -1;
      if (this.highlightAuthor) {
        highlightAuthorInd = authorList.findIndex((n) =>
          n.includes(this.highlightAuthor)
        );
        authorsFormatted[highlightAuthorInd] =
          "<span class='highlight-author'>" +
          authorsFormatted[highlightAuthorInd] +
          "</span>";
      }
      if (this.format == "short") {
        if (authorsFormatted.length == 1) {
          return authorsFormatted[0];
        } else if (highlightAuthorInd == -1) {
          // No highlighted author, so list them all
          var lastAuthor = authorsFormatted.pop();
          return authorsFormatted.join(", ") + ", and " + lastAuthor;
        } else if (highlightAuthorInd == 0) {
          return authorsFormatted[0] + " et al";
        } else {
          // Highlighted author isn't first. List all preceding, then et al
          var preHighlightAuthors = authorsFormatted.slice(
            0,
            highlightAuthorInd + 1
          );

          return preHighlightAuthors.join(", ") + " et al";
        }
      } else if (this.format == "full") {
        if (authorsFormatted.length > 1) {
          var lastAuthor = authorsFormatted.pop();
          return authorsFormatted.join(", ") + ", and " + lastAuthor;
        } else {
          return authorsFormatted;
        }
      }
    },
    title: function () {
      return '"'+this.json.title+'." ';
    },
    thesisInfo: function () {
      if (this.json.type == "phdthesis") {
        return 'PhD Dissertation, ' + this.json.school;
      } else {
        return "";
      }
    },
    pubInfo: function () {
      // Journal/bookinfo, volume, issue, pages
      // All comma separated with a period at the end
      var pubInfoArr = [
        this.pubLocation,
        this.json.volume,
        this.json.number,
        this.thesisInfo
      ].filter((n) => n);
      if (this.issueDate) {
        pubInfoArr[pubInfoArr.length - 1] += " " + this.issueDate;
      }
      if (this.pages) {
        pubInfoArr.push(this.pages);
      }
      if (pubInfoArr.length > 0) {
        return pubInfoArr.join(", ") + ". ";
      }
    },
    shortPubInfo: function () {
      // Short form of the publication information.
      // If not given, use full form.
      if (this.json.short_booktitle) {
        return `<i>${this.json.short_booktitle}</i>`;
      } else if (this.json.short_journal) {
        return `<i>${this.json.short_journal}</i>`;
      } else {
        return this.pubInfo;
      }
    },
    pubLocation: function () {
      // Book title, conference, journal, etc.
      if (this.json.booktitle) {
        var t = `<i>${this.json.booktitle}</i>`;
        if (this.json.type === "poster") {
          return "Poster at " + t;
        } else if (this.json.type === "inproceedings") {
          return "In " + t;
        } else {
          return t;
        }
      } else if (this.json.journal) {
        return `<i>${this.json.journal}</i>`;
      }
    },
    pages: function () {
      if (this.json.pages) {
        return this.json.pages.replace("--", "–");
      }
    },
    date: function () {
      if (this.json.year) {
        return this.json.year.replace("--", "–");
      }
    },
    issueDate: function () {
      if (this.json.issue_date) {
        return "(" + this.json.issue_date.replace("--", "–") + ")";
      }
    },
    addendum: function () {
      if (this.json.addendum) {
        return this.json.addendum.replace("--", "–");
      }
    },
    doi: function () {
      var doiUrl = "https://doi.org/" + this.json.doi;
      return `DOI: <a href="${doiUrl}">${this.json.doi}</a>`;
    },
  },
  methods: {
    authorLastFI: function (name) {
      // Format an input string "Last, First Middle..." as "Last, F. M."
      // Includes separation at hyphens ("Last, First-Mid" -> "Last, F.-M.")
      var lastName, firstName;
      var authorSplit = name.split(",");
      [lastName, firstName] = authorSplit.map((n) => n.trim());
      var initialsSpaced = firstName
        .split(" ")
        .map((n) => n.charAt(0))
        .join(". ");
      var firstInitials = initialsSpaced
        .split("-")
        .map((n) => n.charAt(0) + ".")
        .join(".-");
      return lastName + " " + firstInitials;
    },
    authorFILast(name) {
      // Format the input string "Last, First MidlDle" as "F M Last"
      var lastName, firstName;
      var authorSplit = name.split(",");
      [lastName, firstName] = authorSplit.map((n) => n.trim());
      var initialsSpaced = firstName
        .split(" ")
        .map((n) => n.charAt(0))
        .join(". ");
      var firstInitials = initialsSpaced
        .split("-")
        .map((n) => n.charAt(0))
        .join("-");
      return firstInitials + " " + lastName;
    },
    authorFirstLast(name) {
      var lastName, firstName;
      var authorSplit = name.split(",");
      [lastName, firstName] = authorSplit.map((n) => n.trim());
      return firstName + " " + lastName;
    },
  },
};
</script>

<style lang="scss">
</style>