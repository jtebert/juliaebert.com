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


      <nuxt id='grid-content'/>

      <footer>&copy; 2018 by Julia Ebert</footer>

    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {}
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
    line-height: 1.2em;
    letter-spacing: 2px;
    text-transform: uppercase;
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
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

footer {
  grid-area: footer;
  text-align: center;
}
</style>

