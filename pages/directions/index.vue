<template>
  <div class="min-h-screen bg-gray-800 pb-4">
    <DirectionNavigation :navColor="navColor" />
    <div class="container mx-auto px-4">
      <div ref="introWrapper" class="flex mb-4">
        <div class="flex flex-col justify-center space-y-4">
          <h1 class=" font-semibold text-shadow-md">方向介绍</h1>
          <p class=" text-shadow-sm">{{ introduction }}</p>
        </div>
        <img class="sm:block hidden" src="~/assets/discovery.svg" alt="" srcset="">
      </div>
      <div class="grid sm:grid-cols-2 gap-4">
        <div 
          v-for="dir in directions" 
          :key="dir.name"
          class=" rounded-3xl bg-white space-y-4 p-8">
          <h3 
            :class="[`text-${dir.color}-600`]"
            class=" text-xl ">
              <span 
                class="text-white iconfont p-2 rounded-full mr-2" 
                :class="['icon-' + dir.icon, 
                         `bg-${dir.color}-600`]" /><span class="font-semibold">{{ dir.name }}</span>
            </h3>
          <p class=" text-gray-600">{{ dir.desc }}</p>
          <button 
            :class="[`bg-${dir.color}-600`, `hover:bg-${dir.color}-700`]"
            class=" px-3 py-2 rounded-lg">了解更多</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator'
import postcss from 'postcss'

const tailWindClasses = `text-blue-600 text-yellow-600 text-red-600 text-green-600
                         bg-blue-600 bg-yellow-600 bg-red-600 bg-green-600
                         hover:bg-blue-700 hover:bg-yellow-700 hover:bg-red-700 hover:bg-green-700`

@Component
export default class DirectionsPage extends Vue {
  private introduction = `滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。`
  private directions = [{
    color: 'yellow',
    icon: 'Game',
    name: '游戏开发',
    desc: '在这个组里，你将学习如何运用引擎进行游戏开发。你可以学习游戏引擎开发/复刻自己心仪游戏，参加很多游戏设计比赛，制作独立游戏，去 BAT 大厂制作游戏。'
  }, {
    color: 'blue',
    icon: 'web',
    name: 'Web 开发',
    desc: 'Web 应用遍布于我们的生活当中，是目前火热的学习方向。在这里你可以跟随经验丰富的前辈们学习前后端开发，并有机会组成一个团队承接企业项目、比赛项目。'
  }, {
    color: 'green',
    icon: 'android',
    name: '移动开发',
    desc: '精通移动设备的应用开发，具有很强的实用性。在这里，你可以学到主流的移动开发技术并用来解决很多日常需求，快来一起开发你的专属应用，一起把技术装进口袋吧。'
  }, {
    color: 'red',
    icon: 'AI',
    name: '人工智能',
    desc: '对自然语言处理（语音助手）、计算机视觉（自动驾驶）、数据挖掘（推荐算法）等方向进行学习。在这里你可以汲取学长的学习经验，接触到不同学院的老师、同学。'
  }]
  @Ref('introWrapper') private introWrapper!: HTMLElement
  private navColor = 'white'

  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        this.navColor = entry.isIntersecting ? 'white' : 'primary'
      },
      { threshold: 0.0 }
    )
    observer.observe(this.introWrapper)
  }
}
</script>
