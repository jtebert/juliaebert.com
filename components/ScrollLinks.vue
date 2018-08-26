<template>
<no-ssr>
<div class="scroll-links">
    <div v-for="(sec, ind) in scrollSections" :key="`sec-${ind}`"
        v-scroll-to="sec" class="scroll-link">
        <span class="label">{{ sec }}</span>
        <div class="dot"></div>
        <div class="line"></div>
    </div>
    <div class="line line-down"></div>

</div>

</no-ssr>
</template>


<script>
export default {
  computed: {
    scrollSections: function() {
      if (process.browser) {
        var secs = document.getElementsByClassName("scroll-section");
        var sec_ids = [];

        for (var i = 0; i < secs.length; i++) {
          if (secs[i].id) {
            sec_ids.push(secs[i].id);
          } else {
            var new_id = "section-" + String(i);
            secs[i].id = new_id;
            sec_ids.push(new_id);
          }
        }
        return sec_ids.map(s => "#" + s);
      }
    }
  }
};
</script>

<style lang="scss">
.scroll-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 33%;
  //   transform: translate(0, -50%);
  right: $column-gap * 2;
  text-align: right;
  line-height: 1em;
  .scroll-link {
    &:hover {
      .dot {
        background-color: $primary;
      }
      .label {
        display: block;
      }
    }
    .label {
      display: none;
      position: absolute;
      text-align: right;
      right: 24px;
      white-space: nowrap;
      background-color: $grey-darker;
      color: $white-bis;
      font-family: $family-subtitle;
      padding: 6px 12px;
      font-weight: 400;
      margin-top: -6px;
    }
    .dot {
      height: 16px;
      width: 16px;
      border: 4px solid $primary;
      border-radius: 50%;
    }
    .line {
      margin-left: 6px;
    }
  }
  .line {
    height: 64px;
    width: 4px;
    margin: -2px 0;
    background: $primary;
    &.line-down {
      height: 1000px;
    }
  }
}
</style>
