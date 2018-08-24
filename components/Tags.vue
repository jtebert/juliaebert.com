<template>
<p class="tags">
    <span class="tag"
        v-for="(tag, id) in tagList"
        :key="`tag-${id}`">
        {{ tag }}
    </span>
</p>
</template>

<script>
export default {
  props: ["tags"],
  computed: {
    tagList: function() {
      return this.tags.split(",").map(t => t.trim());
    }
  }
};
</script>