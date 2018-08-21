<template>
<p class="publication">
    <span class="download-link">
        <a v-if="json.file" :class="['mdi', iconName]" :href=json.file></a>
        <i v-else:class="['mdi', iconName]"></i>
    </span>
    <span class="citation">
        <span class="author">{{ authorsLastFI }}, </span>
        <span class="title">"{{ json.title }},"</span>
        <span class="booktitle" v-if="json.booktitle> in <i>{{ json.booktitle }}</i></span>
        <span class="organization" v-if="json.organization">, {{ json.organization }}</span>
        <span class="year" v-if="json.year">, {{ json.year }}</span>
        <span class="pages" v-if="json.pages">, pp. {{ json.pages }}</span>
        <span class="note" v-if="json.note">, {{ json.note }}</span>
        <span class="addendum" v-if="json.addendum">, {{ json.addendum }}</span>
        <span class="address" v-if="json.address">, {{ json.address }}</span>.
    </span>
</p>
</template>

<script>
// This is designed to be used within another compononent (PublicationList),
// which passes just a dictionary of values for a particular publication. This
// compononent should not be used directly.
export default {
    props: ["json", "highlightAuthor"]
    computed: {
        iconName: function() {
            // Get the name of the MDI icon depending on the file type
            switch(this.json.type) {
                case "poster":
                    return "mdi-file mdi-rotate-90"
                case "paper":
                    return "mdi-book"
            }
        }
        authorsLastFI: function() {
            // Produce string of authors in the form: Last, F. M., Last2, F. M., ...
            var authorList = this.json.author
            authorsFormatted = authorList.map(this.authorLastFI)
            // Highlight any authors that include the specified string by wrapping
            // it in a span with the class "highlight-author" (which can then be formatted
            // with CSS)
            if this.highlightAuthor:
                highlightAuthorInd = authorList.findIndex(n => n.includes(this.highlightAuthor))
                authorsFormatted[highlightAuthorInd] = "<span class='highlight-author'>" + authorsFormatted[highlightAuthorInd] + "</span>"
            return authorsFormatted.join(", ")
        }
    }
    methods: {
        authorLastFI: function(name) {
            // Format an input string "Last, First Middles..." as "Last, F. M."
            // Includes separation at hyphens ("Last, First-Mid" -> "Last, F.-M.")
            var lastName, firstName
            authorSplit = author.split(",");
            [lastName, firstName] = authorSplit.map(n => n.trim())
            initialsSpaced = firstName.split(" ").map(n => n.charAt(0)).join(". ")
            firstInitials = initialsSpaced.split("-").map(n => n.charAt(0)).join(".-")
            return lastName + " " + firstInitials
        }
    }
}
</script>

<style lang="scss">
.highlight-author {
    font-weight: 500;
}
.publication {
    position: relative;
    .download-link {
        position: absolute;
        left: 0;
    }
    .citation {
        margin-left: 1.5em;
    }
}
</style>