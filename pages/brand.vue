<template>
<page-content
    title="Personal Branding Guide">
    <div slot="content">
        <div slot="intro" id='toc'></div>
        <vue-markdown toc tocId="toc" :tocFirstLevel=1 :tocLastLevel=1 class="content">
# Overview

My personal branding looks geeky and techy because I am. (This isn't the work of a real designer.) It should look professional but have room for some fun. I've settled on this as a balance that works well with both more formal content (like my CV) and the more sarcastic tone of my blog.

The color palette and font choices are a reference old phosphorous displays (green and amber/orange) and the current favorite color for tech companies (blue). I was also influenced by the design of tech websites like [Wired](https://www.wired.com/).

## Goals

- Be a contact point for science communication
- Be known as an advocate in the STEM community
- Make myself visible in the academic world
- Get a tenure track job
- Develop interdisciplinary collaborations

# Logo

The logo is a circuit representation of my first initial, because I do computery things. It may be used prominently (i.e., as a feature) or as an icon down to 32x32 pixels. The latter is likely preferred when heavy use of graphics is not the norm (such as a CV or as a watermark). It may also be used as a Favicon.

Don't be so full of yourself as to use it more than once on each page.

It is available as a vector (SVG) or raster (PNG) image. Never use it as a JPG image, because compression sucks.

*Include files, including PNG at various sizes/colors and favicon*

| Green                    | Dark                     | Light                    |
| ------------------------ | ------------------------ | ------------------------ |
| [SVG (default: 32x32)]() | [SVG (default: 32x32)]() | [SVG (default: 32x32)]() |
| [32x32]()                | [32x32]()                | [32x32]()                |
| [64x64]()                | [64x64]()                | [64x64]()                |
| [128x128]()              | [128x128]()              | [128x128]()              |
| [256x256]()              | [256x256]()              | [256x256]()              |
        </vue-markdown>
    </div>
</page-content>
</template>

<script>
// import VueMarkdown from "vue-markdown";
import PageContent from "~/components/PageContent.vue";

export default {
  components: {
    PageContent
    // VueMarkdown
  }
};
</script>

<style lang="scss">
</style>
