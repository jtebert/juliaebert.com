<template>
  <div class="section">
    <div class="container">

    <div class="layout">

      <div id="main-logo">
        <img src="/imgs/logos/circuit-logo.svg">
      </div>

      <div id="name"><h1>
        Julia<br>Ebert
      </h1></div>

      <nav-box id='nav'></nav-box>

      <nuxt id='grid-content'/>

      <footer>&copy; 2018 by Julia Ebert</footer>

    </div>
  </div>
</div>
</template>

<script>
import NavBox from "~/components/NavBox.vue";

export default {
  components: {
    NavBox
  }
};
</script>

<style lang="scss">
#main-logo {
  position: relative;
  text-align: right;
  grid-area: logo;
  img {
    max-width: 100%;
    height: 100%;
  }
}

#name {
  display: flex;
  grid-area: name;
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

#nav {
  grid-area: nav;
  @include touch {
    grid-area: nav-touch;
  }
}

#grid-content {
  grid-area: content;
}

.layout {
  display: grid;
  grid-template-columns: 250px auto auto;
  grid-template-rows: 205px 1fr auto;
  grid-template-areas:
    "logo name nav-touch"
    "nav content content"
    ". footer footer";
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
  grid-area: footer;
  text-align: center;
  color: $light;
}
</style>

