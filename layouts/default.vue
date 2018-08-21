<template>
  <div class="section">
    <div class="container">
          <!-- <square-img-tile :img-src="require('~/assets/logo.png')" ></square-img-tile> -->
            <!-- <figure class="image is-square">
              <img src="~/assets/logo.png">
            </figure> -->

    <div class="layout">

      <div id="logo">
        <img src="~/assets/imgs/logos/circuit-logo.svg">
      </div>

      <div id="name"><h1>
        Julia<br>Ebert
      </h1></div>

      <nav-box></nav-box>

      <nuxt/>

      <footer>&copy; 2018 by Julia Ebert</footer>

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
#logo {
  position: relative;
  text-align: right;
  img {
    max-width: 100%;
    height: 100%;
  }
}

#name {
  display: flex;
  height: 100%;
  h1 {
    display: inline-block;
    align-self: flex-end;
    font-size: 4rem;
    font-weight: 500;
    color: $light;
    line-height: 1.2em;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: $column-gap;
  }
}

.layout {
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 205px auto auto;
  grid-template-areas:
    "logo name"
    "nav content"
    ". footer";
  grid-gap: 2 * $column-gap 2 * $column-gap;
  @include mobile {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2 * $column-gap;
  grid-row-gap: 2 * $column-gap;
  @include mobile {
    grid-template-columns: repeat(2, 1fr);
  }
}

footer {
  grid-column-start: footer-start;
  grid-column-end: footer-end;
  text-align: center;
  color: $light;
}
</style>

