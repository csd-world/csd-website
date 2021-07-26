<template>
  <div class="relative">
    <Navigation />
    <no-ssr>
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
    </no-ssr>
  </div>
</template>

<script>
import Vue from 'vue'
import Navigation from '~/components/Navigation.vue'

export default Vue.extend({
  data() {
    return {
      options: {
        anchors: ['1', '2', '3', '4'],
        sectionsColor: ['#4e54c8', '#8f94fb', '#8f94fb', '#8f94fb'],
        navigation: true,
        navigationTooltips: ['欢迎加入软件部', '一个自由的技术社团', '一群充满创造力的人', '你也可以成为技术达人'],
	menu: '#myMenu',
        onLeave: this.onLeave,
        afterLoad: this.afterLoad
      },
      shadow: true
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

<style lang="postcss">
  .section {
    overflow: hidden;
  }

  .section-wrapper {
    @apply !container !mx-auto;
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

  #fp-nav ul li a span, .fp-slidesNav ul li a span {
    background: rgba(255, 255, 255, 0.75) !important;
  }

  #fp-nav.fp-right {
    @apply !right-1 sm:right-auto;
  }
</style>