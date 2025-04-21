<template>
  <div class="body-content">
    <!-- <section class="hero is-fullheight bg-img" id="header"> -->
    <!-- <particlesJS/> -->

    <section id="header" class="hero is-fullheight bg-img">
      <div class="hero-head">
        <nav-bar/>
      </div>
      <div class="hero-body">
        <div class="typer-title">
          <h1 class="name-title">Julia Ebert</h1>
          <client-only>
            <!-- <template #fallback>
              <h2 id="does-things" class="subtitle">builds robots.</h2>
            </template> -->
            <div class="typing-container">
              <span id="does-things"  class="subtitle typing">
                <span id="typing-element" ref="typingElement"/>
              </span>
              <span class="cursor"/>
            </div>
          </client-only>
        </div>
      </div>
      <div class="hero-footer has-text-centered">
        <!-- <i v-scroll-to="'#main'" class="mdi mdi-chevron-down to-rest"/> -->
        <i  class="mdi mdi-chevron-down to-rest"/>
      </div>
    </section>
    <div id="main">
      <slot />
    </div>
    <my-footer/>
  </div>
</template>

<script setup>
import NavBar from "~/components/NavBar.vue";
import MyFooter from "~/components/MyFooter.vue";
// import ParticlesJS from "~/components/ParticlesJS.vue";
import { ref, onMounted } from 'vue';

const typingElement = ref(null);
const strings = [
  'builds robots.',
  'develops algorithms.',
  'makes things.'
];
let currentStringIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 70;
const delayBetweenStrings = 2000;

onMounted(() => {

  if (import.meta.client) {
    // Small delay to ensure the element is properly mounted
    setTimeout(() => {
      if (typingElement.value) {
        type();
      }
    }, 100);
  }
});

function type() {
  if (!typingElement.value) {
    console.error('Typing element not available');
    return;
  }

  const currentString = strings[currentStringIndex];

  if (isDeleting) {
    // Instant deletion
    typingElement.value.textContent = '';
    currentCharIndex = 0;
    isDeleting = false;
    currentStringIndex = (currentStringIndex + 1) % strings.length;
    setTimeout(type, typingSpeed);
  } else {
    typingElement.value.textContent = currentString.substring(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentString.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, delayBetweenStrings);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}
</script>


