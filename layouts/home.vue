<template>
  <div class="body-content">
    <section class="hero is-fullheight" id="header">
      <particles/>

      <div class="hero-head debug-head">
        <nav-bar/>
      </div>
      <div class="hero-body">
        <div class="typer-title">
          <h1 class="name-title">Julia Ebert</h1>
          <client-only>
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
        <i @click="scrollToMain" class="mdi mdi-chevron-down to-rest" style="cursor: pointer;"/>
      </div>
    </section>
    <div id="main" ref="mainElement">
      <slot />
    </div>
    <my-footer/>
  </div>
</template>

<script setup>
import NavBar from "~/components/NavBar.vue";
import MyFooter from "~/components/MyFooter.vue";
import Particles from "~/components/Particles.vue";
import { ref, onMounted, nextTick } from 'vue';

const typingElement = ref(null);
const mainElement = ref(null);
const scrollToMain = () => {
  if (mainElement.value) {
    mainElement.value.scrollIntoView({ behavior: 'smooth' });
  }
};


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

onMounted(async () => {
  if (import.meta.client) {
    await nextTick();
    if (typingElement.value) {
      type();
    }
  }
});

function type() {
  if (!typingElement.value) {
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
