<template>
    <nav class="navbar is-fixed-top square-nav">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="/imgs/icons/misc.svg" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <scrollactive :offset="0" class="navbar-end">
            <a href="#header" class="navbar-item scrollactive-item">
              <img src="/imgs/icons/misc.svg">
            </a>
            <a href="#research" class="navbar-item scrollactive-item">
              <img src="/imgs/icons/research.svg">
            </a>
            </scrollactive>
        </div>
      </div>
    </nav>
</template>

<style lang="scss">
</style>
