<template>
<div>
  <primary-section
    title="Personal Branding Guide"
    subtitle="Excessive, narcissistic procrastination"
    texture="signal"
    icon="brand">
    <div class="block-content content">
      <vue-markdown>
# Overview

My personal branding looks geeky and techy because I am. (This isn't the work of a real designer.) It should look professional enough but have room for some fun. I've settled on this as a balance that works well with both more formal content (like my CV) and the more sarcastic tone of my blog.

The color palette and font choices are a reference old phosphorous displays (green and amber/orange) and the current favorite color for tech companies (blue). I was also influenced by the design of tech websites like [Wired](https://www.wired.com/).

## Goals

- Be a contact point for science communication
- Be known as an advocate in the STEM community
- Make myself visible in the academic world
- Develop interdisciplinary collaborations
- Get a tenure track job (eventually)

# Colors
      </vue-markdown>
      <color-block color=green></color-block>

      <div class="color-block is-green"></div>
      <div class="color-block is-cyan"></div>
      <div class="color-block is-blue"></div>
      <div class="color-block is-purple"></div>
      <div class="color-block is-red"></div>
      <div class="color-block is-orange"></div>

      <vue-markdown>

# Logo

The logo is a circuit representation of my first initial, because I do computery things. It may be used prominently (i.e., as a feature) or as an icon down to 32x32 pixels. The latter is likely preferred when heavy use of graphics is not the norm (such as a CV or as a watermark). It may also be used as a Favicon.

Don't be so full of yourself as to use it more than once on each page.

It is available as a vector (SVG) or raster (PNG) image. Never use it as a JPG image, because compression sucks.

*Include files, including PNG at various sizes/colors and favicon*

| Green                                              | Dark (Grey)                                       | White                                              | Black
| -------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------
| [SVG (default: 32x32)](/imgs/logos/logo-green.svg) | [SVG (default: 32x32)](/imgs/logos/logo-dark.svg) | [SVG (default: 32x32)](/imgs/logos/logo-white.svg) | [SVG (default: 32x32)](/imgs/logos/logo-black.svg)
| [32x32](/imgs/logos/logo-green-32x32.png)          | [32x32](/imgs/logos/logo-dark-32x32.png)          | [32x32](/imgs/logos/logo-white-32x32.png)          | [32x32](/imgs/logos/logo-black-32x32.png)
| [64x64](/imgs/logos/logo-green-64x64.png)          | [64x64](/imgs/logos/logo-dark-64x64.png)          | [64x64](/imgs/logos/logo-white-64x64.png)          | [64x64](/imgs/logos/logo-black-64x64.png)
| [128x128](/imgs/logos/logo-green-128x128.png)      | [128x128](/imgs/logos/logo-dark-128x128.png)      | [128x128](/imgs/logos/logo-white-128x128.png)      | [128x128](/imgs/logos/logo-black-128x128.png)
| [256x256](/imgs/logos/logo-green-256x256.png)      | [256x256](/imgs/logos/logo-dark-256x256.png)      | [256x256](/imgs/logos/logo-white-256x256.png)      | [256x256](/imgs/logos/logo-black-256x256.png)

# Profile Photo

- Uncropped ([original](/imgs/profile-photo/profile-orig.jpg))
- Square, far crop ([high res](/imgs/profile-photo/profile-square-far-lg.jpg), [lower res](/imgs/profile-photo/profile-square-far-sm.jpg))
- Square, close crop ([high res](/imgs/profile-photo/profile-square-near-lg.jpg), [lower res](/imgs/profile-photo/profile-square-near-sm.jpg))
- Portrait orientation ([high res](/imgs/profile-photo/profile-portrait-lg.jpg), [lower res](/imgs/profile-photo/profile-portrait-sm.jpg))
- Landscape orientation ([high res](/imgs/profile-photo/profile-landscape-lg.jpg), [lower res](/imgs/profile-photo/profile-landscape-sm.jpg))

        </vue-markdown>
    </div>
  </primary-section>
</div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import PrimarySection from "~/components/PrimarySection.vue";
import ColorBlock from "~/components/ColorBlock.vue";

export default {
  components: {
    VueMarkdown,
    PrimarySection,
    ColorBlock,
  },
};
</script>

<style lang="scss">
</style>
