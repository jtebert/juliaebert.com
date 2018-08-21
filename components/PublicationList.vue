// PublicationList
// - Filters are [or within] and [and between].
//   e.g., typeFilter=['paper', 'poster'] and keywordFilter=['kilobots', 'robots'] will return all
//   of the papers and posters that have either the keyword kilobots or robots.
// - Publications are sorted reverse chronologically, by the `year` field. (Within that, all bets
//   are off)
// - Publication data will be pulled from ~/assets/publications.json
// - Example :
//     <publication-list
//         :type-filter="['paper']"
//         :pub-key-filter="['ebert2018aamas', 'salah2018icra']"
//         :keyword-filter="['swarms']"
//         highlight-author="'Ebert'"
//         show-years
//     </publication-list>
// Optional properties:
// - typeFilter : Array of types of publications to list. If not specified, all types will be used.
// - pubKeyFilter : Array of keys of publications to display. If not specified, all will be listed.
// - keywordFilter : Array of keywords. A publication will be shown if it contains any of these.
// - showYears : Whether to separate the publications by year, with a header/title between showing
//   the year. Defaults to false.
// - highlightAuthor : Name of the author to highlight/make bold in the citations. (Will check if
//   this matches any substring of the author names'. If not specified, no names will be
//   highlighted/emphasized)

<template>
    <div class="publication-list">
        <div v-if=showYears v-for="yearpubs in publicationsByYear">
            <h2 class="title">{{ yearpubs.year }}</h2>
            <publication
                v-for="pub in yearpubs.publications"
                :json=pub
                highlightAuthor=highlightAuthor>
            </publication>
        </div>
        <publication v-else
            v-for="pub in publications"
            :json=pub
            highlightAuthor=highlightAuthor>
        </publication>
    </div>
</template>

<script>
import Publication from "~/components/Publication"
// https://stackoverflow.com/a/47958533
import citations from "~/assets/publications.json"

export default {
    props: {
        typeFilter: Array,
        pubKeyFilter: Array,
        keywordFilter: Array,
        showYears: {
            type: Boolean,
            default: false
        }
        highlightAuthor: String
    }
    data () {
        return JSON.parse(citations)
    }
    components: {
        Publication,
    }
    computed: {
        publications: function () {
            // Get an array of all the publications from the file that match the specification
            // NB: The output does not retain the pubKeys
            // Filter the citation keys based on all the specified filters
            // Then map these keys to their corresponding values
            return Object.keys(this.citations)
                .filter(key => this.pubFilter(key, this.citations[key]))
                .map(key => this.citations[key])
        }
        publicationsByYear: function() {
            // Key the publications into an object by year (to be used if showYears is true)
            var pub_year_obj = this.publications.reduce(
                (o, val) => {
                    o[val.year] += [val]
                    return o
                },
                {}
            )
            // Then return a sorted list by year, in descending order (newest to oldest)
            return Object.keys(pub_year_obj)
                .map(year => {var p = {}
                           p['publications'] = pub_year_obj[year]
                           p['year'] = year
                           return p})
                .sort((a, b) => b.year - a.year)
        }
    },
    methods: {
        pubFilter (key, pub) {
            // Check whether the publication meets all the filter requirements
            return (
                !this.pubKeyFilter ||               // If there's a pubKey filter...
                this.pubKeyFilter.includes(key)     // ... the filter must include this pub's key
            ) && (
                !this.typeFilter ||                 // And if there's a type filter...
                this.typeFilter.includes(pub.type)  // ... the filter must include this pub's type
            ) && (
                !this.keywordFilter ||              // And if there's a keyword filter...
                (pub.keywords &&                    // ... the pub must have keywords and ...
                // ...there must be a non-empty intersection between the keyword filter
                //    and the pub's keywords
                 this.keywordFilter.filter(v => pub.keywords.includes(v)))
            )
        }
    }
}
</script>

<style lang="scss">
</style>