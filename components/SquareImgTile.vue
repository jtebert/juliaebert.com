<template>

<div class="column is-3">
  <div class="square square-img">
    <div class="img-square-content">
        <figure class="image is-square">
          <img :src=imgSrc>
          <!-- {{ imgSrc }} -->
        </figure>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ["imgSrc"]
};
</script>


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

.img-square-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
