<template>
    <div class="cv-award">
        <div class="cv-sidebar">{{ String(date).replace('--', '–') }}</div>
        <div class="cv-main" v-html="award_link"></div>
    </div>
</template>

<script>
export default {
  props: ["date", "award", "link"],
  computed: {
    award_link: function() {
      if (this.link) {
        // var tmp = `<a href='${this.link}'>${this.award}</a>`;
        var tmp = `${this.award} <a href='${this.link}'><i class="link mdi mdi-link-variant"></i></a>`;
        return tmp;
      } else {
        return this.award;
      }
    }
  }
};
</script>

<style lang="scss">
</style>
