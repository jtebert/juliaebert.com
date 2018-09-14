<template>
<div class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation" id="top-nav">
    <div class="container">
        <div class="navbar-brand">
            <div class="navbar-item">Logo</div>
            <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" id="navMenu">
            <scrollactive class="navbar-end" :offset="0">
                <a class="navbar-item scrollactive-item" href="#about-me">About Me</a>
                <a class="navbar-item scrollactive-item" href="#cv">CV</a>
                <a class="navbar-item scrollactive-item" href="#research">Research</a>
                <a class="navbar-item scrollactive-item" href="#publications">Publications</a>
                <a class="navbar-item scrollactive-item" href="#projects">Projects</a>
                <a class="navbar-item scrollactive-item" href="#media">Media</a>
            </scrollactive>
        </div>
    </div>
</div>
</template>

<script>
export default {};

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

// document.addEventListener("DOMContentLoaded", () => {
//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(
//     document.querySelectorAll(".navbar-burger"),
//     0
//   );

//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {
//     // Add a click event on each of them
//     $navbarBurgers.forEach(el => {
//       el.addEventListener("click", () => {
//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target;
//         const $target = document.getElementById(target);

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle("is-active");
//         $target.classList.toggle("is-active");
//       });
//     });
//   }
// });
</script>

<style lang="scss">
</style>
