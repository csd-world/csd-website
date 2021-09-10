<template>
    <div class="relative bg-gray-200 flex flex-col items-center min-h-screen">
      <div class="w-full sm:bg-primary">
        <Navigation :color="'primary'" />
      </div>
      <div class="flex-grow relative  px-4 w-full sm:w-auto">
        <div class="bg-white rounded-lg text-gray-700 text-center absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  p-8 space-y-6 w-11/12 sm:w-auto sm:whitespace-nowrap">
          <div ref="animation"></div>
          <h3 class="text-primary text-2xl font-semibold">报名成功！</h3>
          <div>
            <p>我们已经收到了你的报名表，很高兴认识你！</p>
            <p>具体安排请等待后续通知。</p>
          </div>
          <div class="space-x-4 whitespace-nowrap">
            <BaseButton
              :link="'/'"
              :icon="'home'"
              :target="''"
              class="text-white"
              :color="'primary'">
              <span>返回首页</span>
            </BaseButton>
            <BaseButton
              :link="'https://oj.dsstudio.tech/problem'"
              class="text-white"
              :color="'primary-lighter'">
              <span>开始练习</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang='ts'>
import lottie, { AnimationItem } from 'lottie-web'
import { Component, Vue, mixins, Ref } from 'nuxt-property-decorator'

const animationData = () => import('~/assets/json/success.json' as any)

@Component
export default class SuccessPage extends Vue {
  @Ref('animation') readonly container!: HTMLElement
  private anim: null | AnimationItem = null
  mounted() {
    animationData().then((data) => {
      this.anim = lottie.loadAnimation({
        container: this.container,
        animationData: data,
        renderer: 'svg',
        autoplay: true,
      })
    })
  }
}
</script>