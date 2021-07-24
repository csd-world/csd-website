<template>
  <full-page :options="options" :style="cssProps">
    <div class="section section01">
      <div class="section-wrapper">
        <Section01 />
      </div>
    </div>
    <div class="section section02">
      <div class="section-wrapper">
        <Section02 />
      </div>
    </div>
    <div class="section section03">
      <div class="section-wrapper">
        <Section03 />
      </div>
    </div>
    <div class="section section04">
      <div class="section-wrapper">
        <Section04 />
      </div>
    </div>
  </full-page>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      options: {
        anchors: ['1', '2', '3', '4'],
        sectionsColor: ['#4e54c8', '#8f94fb', '#8f94fb', '#8f94fb'],
        onLeave: this.onLeave,
        afterLoad: this.afterLoad
      },
      shadow: true
    }
  },
  methods: {
    onLeave(origin, destination, direction) {
      console.log(origin.index, destination.index, direction.index)
      if (origin.index === 0) this.shadow = false
    },
    afterLoad(origin, destination, direction) {
      if (destination.index === 0) this.shadow = true
    }
  },
  computed: {
    cssProps() {
      return {
        '--inner-shadow': this.shadow ? 'inset 0 0 5rem rgba(0, 0, 0, .5)' : 'none'
      }
    }
  }
})
</script>

<style lang="postcss" scoped>
  .section-wrapper {
    @apply container mx-auto;
  }

  .section01 {
    background: #4e54c8;  
    background: linear-gradient( #4e54c8, #8f94fb);
    color: white;
    transition: all 0.2s ease;
  } 

  .section02 {
    background: white;
  }
</style>