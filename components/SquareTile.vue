<template>
  <div class="square">
    <div class="square-content">
        <slot></slot>
    </div>
  </div>
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
}
</style>
