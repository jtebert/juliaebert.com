<template>
    <div class="resume-header is-print-only">
        <!-- <img class="logo" src="/imgs/logos/logo-black.svg"> -->
        <div class="name">
            <h1 id="title">{{ name }}</h1>  <!-- Using ID=title will set this to show up in the printed footer -->
            <p class="subtitle" v-html="subtitle"/>
        </div>
        <div class="links">
            <icon-link v-for="link in links" :key="link.text"
                :to="link.to"
                :icon="link.icon"
                size="16px">
                {{ link.text }}
            </icon-link>
        </div>
    </div>
</template>

<script>
import IconLink from "~/components/IconLink.vue";

export default {
  components: {
    IconLink,
  },
  props: {
    name: { type: String },
    subtitle: { type: String },
    links: { type: Array },
  },
};
</script>