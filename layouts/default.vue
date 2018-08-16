<template>
  <div class="section">
    <div class="container">
          <!-- <square-img-tile :img-src="require('~/assets/logo.png')" ></square-img-tile> -->
            <!-- <figure class="image is-square">
              <img src="~/assets/logo.png">
            </figure> -->


    <div class="columns">
      <div class="column is-narrow">
          <img src="~/assets/logo.png" style="max-width: 200px;">
      </div>

      <div class="column">
        <h1 class="title is-1">Julia<br>Ebert</h1>
      </div>
    </div>

  <div class="columns">
    <nav-box></nav-box>

  <!-- <div class="column is-narrow">
    <div  id="nav-box">
      <ul id="nav-links" class="is-size-4">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/cv">CV</nuxt-link></li>
        <li><nuxt-link to="/research">Research</nuxt-link></li>
        <li><nuxt-link to="/publications">Publications</nuxt-link></li>
        <li><nuxt-link to="/programming">Programming</nuxt-link></li>
        <li><nuxt-link to="/media">Media</nuxt-link></li>
      </ul>
    </div>
  </div> -->


  <div class="column">
    <div class="grid">
      <div class="square"><div class="square-content img">
          <img src="~/assets/self-csgf.jpg">
      </div></div>
      <div class="square"><div class="square-content">Hi</div></div>
      <div class="square"><div class="square-content">3</div></div>
      <div class="square"><div class="square-content">4</div></div>
      <div class="square"><div class="square-content">4</div></div>
      <div class="square"><div class="square-content">6</div></div>
      <div class="square"><div class="square-content">7</div></div>
      <div class="square"><div class="square-content">8</div></div>
      <div class="square"><div class="square-content">9</div></div>
    </div>
  </div>
  </div>




  </div>
</div>
</template>

<script>
import SquareTile from "~/components/SquareTile.vue";
import SquareImgTile from "~/components/SquareImgTile.vue";
import NavBox from "~/components/NavBox.vue";

export default {
  components: {
    SquareTile,
    SquareImgTile,
    NavBox
  }
};
</script>

<style lang="scss">
.column.is-narrow {
  min-width: 200px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2 * $column-gap;
  grid-row-gap: 2 * $column-gap;
  @include mobile {
    grid-template-columns: repeat(2, 1fr);
  }
  > * {
    background-color: $white;
  }
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
  &.img {
    padding: 0;
    img {
      object-fit: cover;
      width: 100%;
      max-height: 100%;
    }
  }
}
</style>

