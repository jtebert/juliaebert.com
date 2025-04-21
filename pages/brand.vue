<template>
<div>
  <primary-section
    title="Personal Branding Guide"
    subtitle="Excessive, narcissistic procrastination"
    texture="signal"
    icon="brand">
    <div class="block-content content">
      <h1 class="is-size-1">Overview</h1>
      <p>
My personal branding looks geeky and techy because I am. (This isn't the work of a real designer.) It should look professional enough but have room for some fun. I've settled on this as a balance that works well with both more formal content (like my CV) and the more sarcastic tone of my blog.
</p>
<p>
The color palette and font choices are a reference old phosphorous displays (green and amber/orange) and the current favorite color for tech companies (blue). I was also influenced by the design of tech websites like [Wired](https://www.wired.com/).
</p>

<h2 class="is-size-2">Goals</h2>
<ul>
<li>Be a contact point for science communication</li>
<li>Be known as an advocate in the STEM community</li>
<li>Make myself visible in the academic world</li>
<li>Develop interdisciplinary collaborations</li>
<li>Get a tenure track job (eventually)</li>
</ul>

<h2 class="is-size-2">Colors</h2>
<color-block color=green></color-block>
<div class="color-block is-green"></div>
<div class="color-block is-cyan"></div>
<div class="color-block is-blue"></div>
<div class="color-block is-purple"></div>
<div class="color-block is-red"></div>
<div class="color-block is-orange"></div>


<h2 class="is-size-2">Logo</h2>
<p>
The logo is a circuit representation of my first initial, because I do computery things. It may be used prominently (i.e., as a feature) or as an icon down to 32x32 pixels. The latter is likely preferred when heavy use of graphics is not the norm (such as a CV or as a watermark). It may also be used as a Favicon.
</p>

<p>
Don't be so full of yourself as to use it more than once on each page.
</p>

<p>
It is available as a vector (SVG) or raster (PNG) image. Never use it as a JPG image, because compression sucks.
</p>

<p>
Include files, including PNG at various sizes/colors and favicon.
</p>

<table>
| Green                                              | Dark (Grey)                                       | White                                              | Black
| -------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------
| [SVG (default: 32x32)](/imgs/logos/logo-green.svg) | [SVG (default: 32x32)](/imgs/logos/logo-dark.svg) | [SVG (default: 32x32)](/imgs/logos/logo-white.svg) | [SVG (default: 32x32)](/imgs/logos/logo-black.svg)
| [32x32](/imgs/logos/logo-green-32x32.png)          | [32x32](/imgs/logos/logo-dark-32x32.png)          | [32x32](/imgs/logos/logo-white-32x32.png)          | [32x32](/imgs/logos/logo-black-32x32.png)
| [64x64](/imgs/logos/logo-green-64x64.png)          | [64x64](/imgs/logos/logo-dark-64x64.png)          | [64x64](/imgs/logos/logo-white-64x64.png)          | [64x64](/imgs/logos/logo-black-64x64.png)
| [128x128](/imgs/logos/logo-green-128x128.png)      | [128x128](/imgs/logos/logo-dark-128x128.png)      | [128x128](/imgs/logos/logo-white-128x128.png)      | [128x128](/imgs/logos/logo-black-128x128.png)
| [256x256](/imgs/logos/logo-green-256x256.png)      | [256x256](/imgs/logos/logo-dark-256x256.png)      | [256x256](/imgs/logos/logo-white-256x256.png)      | [256x256](/imgs/logos/logo-black-256x256.png)
</table>

<h2 class="is-size-2">Profile Photo</h2>

<ul>
<li>Uncropped ([original](/imgs/profile-photo/profile-orig.jpg))</li>
<li>Square, far crop ([high res](/imgs/profile-photo/profile-square-far-lg.jpg), [lower res](/imgs/profile-photo/profile-square-far-sm.jpg))</li>
<li>Square, close crop ([high res](/imgs/profile-photo/profile-square-near-lg.jpg), [lower res](/imgs/profile-photo/profile-square-near-sm.jpg))</li>
<li>Portrait orientation ([high res](/imgs/profile-photo/profile-portrait-lg.jpg), [lower res](/imgs/profile-photo/profile-portrait-sm.jpg))</li>
<li>Landscape orientation ([high res](/imgs/profile-photo/profile-landscape-lg.jpg), [lower res](/imgs/profile-photo/profile-landscape-sm.jpg))</li>
</ul>

    </div>
  </primary-section>
</div>
</template>

<script setup>
import PrimarySection from "~/components/PrimarySection.vue";
import ColorBlock from "~/components/ColorBlock.vue";
</script>

<style lang="scss">
</style>
