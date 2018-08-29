<template>
    <nav class="navbar is-fixed-top square-nav">
      <div class="container">
        <div class="navbar-brand">
          <!-- <a class="navbar-item">
            <img src="/imgs/icons/misc.svg" alt="Logo">
          </a> -->
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <scrollactive :offset="0" class="navbar-end">
            <a href="#who-i-am" class="navbar-item scrollactive-item">
              <img src="/imgs/icons/who-i-am.svg">
            </a>
            <a href="#cv" class="navbar-item scrollactive-item">
              <img src="/imgs/icons/cv.svg">
            </a>
            <a href="#research" class="navbar-item scrollactive-item">
              <img src="/imgs/icons/research.svg">
            </a>
            <a href="#publications" class="navbar-item scrollactive-item">
              <img src="/imgs/icons/publications.svg">
            </a>
            <a href="#projects" class="navbar-item scrollactive-item">
              <img src="/imgs/icons/projects.svg">
            </a>
            <a href="#media" class="navbar-item scrollactive-item">
              <img src="/imgs/icons/media.svg">
            </a>

            </scrollactive>
        </div>
      </div>
    </nav>
</template>

<style lang="scss">
</style>
