<template>
    <div class="relative bg-gray-200 flex flex-col items-center min-h-screen">
      <div class="w-full sm:bg-primary">
        <Navigation :color="'primary'" />
      </div>
      <div class="flex-grow relative  px-4 w-full sm:w-auto">
        <div class="bg-white rounded-lg text-gray-700 text-center absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  p-8 space-y-6 w-11/12 sm:w-auto sm:whitespace-nowrap shadow-md">
          <div class="ribbon ribbon-top-left"><span>恭喜！</span></div>
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

<style lang="postcss" scoped>

/* common */
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: '';
  display: block;
  /* border: 5px solid #2980b9; */
  @apply border-[5px] border-primary-darker;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  /* background-color: #3498db; */
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
  color: #fff;
  font: 700 18px/1 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0,0,0,.2);
  text-transform: uppercase;
  text-align: center;
  @apply bg-primary;
}

/* top left*/
.ribbon-top-left {
  top: -10px;
  left: -10px;
}
.ribbon-top-left::before,
.ribbon-top-left::after {
  border-top-color: transparent;
  border-left-color: transparent;
}
.ribbon-top-left::before {
  top: 0;
  right: 0;
}
.ribbon-top-left::after {
  bottom: 0;
  left: 0;
}
.ribbon-top-left span {
  right: -25px;
  top: 30px;
  transform: rotate(-45deg);
}

/* top right*/
.ribbon-top-right {
  top: -10px;
  right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 0;
}
.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}
.ribbon-top-right span {
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
}

/* bottom left*/
.ribbon-bottom-left {
  bottom: -10px;
  left: -10px;
}
.ribbon-bottom-left::before,
.ribbon-bottom-left::after {
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.ribbon-bottom-left::before {
  bottom: 0;
  right: 0;
}
.ribbon-bottom-left::after {
  top: 0;
  left: 0;
}
.ribbon-bottom-left span {
  right: -25px;
  bottom: 30px;
  transform: rotate(225deg);
}

/* bottom right*/
.ribbon-bottom-right {
  bottom: -10px;
  right: -10px;
}
.ribbon-bottom-right::before,
.ribbon-bottom-right::after {
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.ribbon-bottom-right::before {
  bottom: 0;
  left: 0;
}
.ribbon-bottom-right::after {
  top: 0;
  right: 0;
}
.ribbon-bottom-right span {
  left: -25px;
  bottom: 30px;
  transform: rotate(-225deg);
}

</style>