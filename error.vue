<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps({
    error: Object as () => NuxtError
  })
</script>

<template>
  <div>
    <NuxtLayout name="default">

      <div class="container has-text-centered">
      <h1 v-if="error.statusCode === 404" class="error-title">Page Not Found</h1>
      <h1 v-else class="error-title">Error {{ error.statusCode }}</h1>
      <h3 class="subtitle is-3">
        <nuxt-link to="/">
          <i class="mdi mdi-arrow-left"></i>&nbsp;Go Home
        </nuxt-link>
      </h3>
      <p class="has-text-white">
        Alternatively, stick around this page and have some fun.<br>(Click or tap on the background and see what happens.)
      </p>
    </div>
    </NuxtLayout>
  </div>
</template>