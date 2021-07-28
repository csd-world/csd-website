<template>
  <div class="relative">
    <Navigation />
    <no-ssr>
      <full-page :options="options">
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
        <div class="section section05">
          <div class="section-wrapper">
            <Section05 />
          </div>
        </div>
      </full-page>
    </no-ssr>
  </div>
</template>

<script lang="ts">
import bus from '~/utils/bus'
import { Component, Vue } from 'nuxt-property-decorator'
import { options } from '~/type'

@Component
  export default class Index extends Vue {
  private options: options = {
    anchors: ['welcome', 'free', 'creative', 'comehere', 'waitforyou'],
    sectionsColor: ['#4e54c8', '#8f94fb', '#8f94fb', '#8f94fb'],
    navigation: true,
    navigationTooltips: ['欢迎加入软件部', '一个自由的技术社团', '一群充满创造力的人', '你也可以成为技术达人', '期待你的到来'],
    onLeave: function(origin, destination) {
      bus.$emit('onLeave', {
        origin,
        destination
      })
    },
    afterLoad: function(origin, destination) {
      bus.$emit('afterLoad', {
        origin,
        destination
      })
    }
  }
  mounted() {
      // document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 +'px';
  }
}
</script>

<style lang="postcss">
  .section {
    overflow: hidden;
  }

  .section-wrapper {
    @apply !container !mx-auto px-6;
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

  .section05 {
    background: linear-gradient(#8f94fb, #4e54c8);
  }

  // improve performance
  .fp-section:not(.active):not(.fp-completely) {
    visibility: hidden;
  }
  
  #fp-nav ul li, .fp-slidesNav ul li {
    margin: 0;
  }


  #fp-nav ul, .fp-slidesNav ul {
    @apply space-y-1;
  }

  #fp-nav ul li a span, .fp-slidesNav ul li a span {
    background: rgba(255, 255, 255, 0.75) !important;
  }

  #fp-nav.fp-right {
    @apply right-0 -translate-x-1/2 sm:right-4;
  }
</style>