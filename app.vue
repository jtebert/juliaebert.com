<template>
  <Transition name="layout" mode="out-in">
    <NuxtLayout>
      <Transition name="page" mode="out-in">
        <NuxtPage />
      </Transition>
    </NuxtLayout>
  </Transition>
</template>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-active .container:not(.nav-container),
.page-leave-active .container:not(.nav-container) {
  transition: all 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-from .container:not(.nav-container),
.page-leave-to .container:not(.nav-container) {
  transform: scale(0.98);
}

/* Layout transitions */
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.2s ease;
}

.layout-enter-active .container:not(.nav-container),
.layout-leave-active .container:not(.nav-container) {
  transition: all 0.2s ease;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}

.layout-enter-from .container:not(.nav-container),
.layout-leave-to .container:not(.nav-container) {
  transform: scale(0.98);
}
</style>