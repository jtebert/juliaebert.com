<template>
<div class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
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
            <div class="navbar-end">
                <a class="navbar-item" href="#about-me">About Me</a>
                <a class="navbar-item" href="#cv">CV</a>
                <a class="navbar-item" href="#research">Research</a>
                <a class="navbar-item" href="#publications">Publications</a>
                <a class="navbar-item" href="#projects">Projects</a>
                <a class="navbar-item" href="#media">Media</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {};

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
