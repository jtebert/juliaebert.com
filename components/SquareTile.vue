<template>
  <div class="square-wrapper">
      <div class="square-padder"></div>

      <div class="square-content img" v-if="type === 'img'">
        <img :src=imgSrc>
      </div>

      <a :href=target class="square-link" v-else-if="type === 'link'">
        <div class="square-content">
          <h2 class="title is-2">
            <i class="mdi mdi-link-variant"></i>
            {{ title }}
          </h2>
          <h4 class="subtitle is-4" v-if="subtitle">{{ subtitle }}</h4>

          <slot></slot>
        </div>
      </a>

      <div class="square-content" v-else-if="type === 'links'">
        <h2 class="title is-2">{{ title }}</h2>
        <div class="links">
          <slot></slot>
        </div>
      </div>

      <div class="square-content" v-else>
        <h2 class="title is-2">{{ title }}</h2>
        <slot></slot>
      </div>

  </div>
</template>

<script>
export default {
  props: ["type", "imgSrc", "title", "subtitle", "target"]
};
</script>


<style lang="scss">
.square-wrapper {
  position: relative;
}

.square-padder {
  padding-top: 100%;
}

.square-link {
  color: inherit;
  .square-content {
    // border: 0.5rem solid $primary;
    // padding: 0.75rem 1rem;
  }
  &:hover .square-content {
    // border-color: inherit;
    background-color: $primary;
    * {
      color: $light;
    }
  }
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

.square-content .links {
  margin: 0 -1.5rem;
  list-style: none;
  font-size: $size-4;
  font-family: $family-subtitle;
  line-height: 1.1em;
  @include touch {
    font-size: $size-5;
  }
  a {
    display: block;
    width: 100%;
    padding-left: calc(1.5em + 1.5rem);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-decoration: none;
    position: relative;
    .mdi,
    .fa {
      position: absolute;
      left: 1.5rem;
    }
    &:hover {
      background-color: $primary;
      color: $light;
    }
  }
}
</style>
