<template>

<div class="tile is-parent is-3">
  <article class="tile square is-child is-white">
    <div class="square-content">
      <slot></slot>
    </div>
  </article>
</div>

<!-- <div class="column is-3">
  <div class="square is-white">
    <div class="square-content">
        <slot></slot>
    </div>
  </div>
</div> -->
</template>

<style lang="scss">
// Based on this: https://spin.atomicobject.com/2015/07/14/css-responsive-square/

.square {
  position: relative;
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.square-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1.25rem 1.5rem;
}
</style>
