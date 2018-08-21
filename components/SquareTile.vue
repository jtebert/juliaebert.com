<template>
  <div class="square-wrapper">
      <div class="square-padder"></div>
      <div class="square-content img" v-if=imgSrc>
        <img :src=imgSrc>
      </div>
      <div class="square-content" v-else>
          <h2 class="title is-2">{{ title }}</h2>
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  props: ["imgSrc", "title"]
};
</script>


<style lang="scss">
.square-wrapper {
  position: relative;
}

.square-padder {
  padding-top: 100%;
}

.square-content {
  background-color: $light;
  padding: 1.25rem 1.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &.img {
    padding: 0;
    background: none;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
}

.links {
  list-style: none;
  font-size: $size-4;
  font-family: $family-subtitle;
  @include touch {
    font-size: $size-5;
  }
  a {
    display: block;
    width: 100%;
    padding-left: 1.75em;
    text-decoration: none;
    position: relative;
    .mdi,
    .fa {
      position: absolute;
      left: 0;
    }
  }
}
</style>
