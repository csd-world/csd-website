<template>
  <div class="flex flex-col sm:flex-row relative">
    <div class="absolute p-1/6 bg-white bg-opacity-20 rounded-full top-[-18%] sm:left-[-12%] sm:top-[-8%]"></div>
    <div class="absolute p-1/4 bg-white bg-opacity-20 rounded-full left-[-23%] top-[-6%] sm:left-[-37%] sm:top-[20%]" />
    <div class="absolute p-1/12 bg-white bg-opacity-20 rounded-full left-[15%] top-[107%] sm:left-[20%] sm:top-[85%]" />
    <div class="absolute p-1/12 bg-white bg-opacity-20 rounded-full left-[25%] top-[110%] sm:left-[30%] sm:top-[100%]" />
    <div class="flex-1 sm:pt-1/10">
      <h2 class="mb-6">你也可以成为技术达人</h2>
      <p class="text-xl text-md text-shadow-md">软件部每个方向都有相应的培养方案和学习资源，助你赢在大学生活的起跑线上。</p>
    </div>
    <div class="flex-1 relative mt-0 sm:mt-16">
      <div class="pb-full" style="padding-bottom: 100%">
        <div class="absolute w-full h-4/6 bg-yellow-50 rounded-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <!-- <lottie class="absolute scale-125 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" :options="lottieOptions" v-on:animCreated="handleAnimation" /> -->
        <div class="absolute h-[140%] w-[140%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" ref="animation"></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, mixins, Ref } from 'nuxt-property-decorator'
import { AnimationItem } from 'lottie-web'
import lottie from 'lottie-web'
import eventMixin from '~/mixins/eventMixin'

const animationData = () => import('~/assets/json/growth.json' as any)


@Component
export default class Section04 extends mixins(eventMixin) {
  @Ref('animation') readonly container!: HTMLElement
  private anim: null | AnimationItem = null
  index = 3;
  play() {
    if (this.anim !== null) this.anim.play()
  }
  stop() {
    if (this.anim !== null) this.anim.stop();
  }
  mounted() {
    animationData().then((data) => {
      this.anim = lottie.loadAnimation({
        container: this.container,
        animationData: data,
        renderer: 'svg',
        autoplay: false
      })
    })
  }
}

</script>