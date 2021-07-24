<template>
  <full-page :options="options">
    <div 
      class="section section01"
      :style="{
        'box-shadow': shadow ? 'inset 0 0 5rem rgba(0, 0, 0, .5)' : 'none'
      }">
      <div class="section-wrapper">
        <Section01 />
      </div>
    </div>
    <div class="section section02">
      <div>
        <Section02 />
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
        anchors: ['1', '2'],
        sectionsColor: ['#4e54c8', '#8f94fb'],
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
  }
})
</script>

<style lang="postcss" scoped>
  .section-wrapper {
    @apply flex justify-center items-center;
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