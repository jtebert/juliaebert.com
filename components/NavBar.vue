<template>
<div class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation" id="top-nav">
    <div class="container">
        <div class="navbar-brand">
            <img src="/imgs/icons/about-me.svg" id='brand-icon'
                v-scroll-to="'#header'" class="navbar-item">
            <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <scrollactive class="navbar-menu" id="navMenu">
            <div class="navbar-end" :offset="48">
                <a class="navbar-item scrollactive-item" href="/#about-me">About Me</a>
                <a class="navbar-item scrollactive-item" href="#cv">CV</a>
                <a class="navbar-item scrollactive-item" href="#research">Research</a>
                <a class="navbar-item scrollactive-item" href="#publications">Publications</a>
                <a class="navbar-item scrollactive-item" href="#projects">Projects</a>
                <a class="navbar-item scrollactive-item" href="#media">Media</a>
            </div>
        </scrollactive>
    </div>
</div>
</template>

<script>
export default {};

// Make navbar opaque on scrolling
if (process.browser) {
  let scrollpos = window.scrollY;
  var header = document.getElementById("top-nav");
  var header_height = header.offsetHeight;
  var add_class_on_scroll = () => header.classList.add("is-solid");
  var remove_class_on_scroll = () => header.classList.remove("is-solid");
  window.addEventListener("scroll", function() {
    scrollpos = window.scrollY;
    if (scrollpos >= header_height * 3) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }
  });
}

// Make hamburger open menu
if (process.browser) {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
}
</script>

<style lang="scss">
</style>
