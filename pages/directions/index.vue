<template>
  <div class="min-h-screen bg-gray-800">
    <Navigation />
    <div class="container mx-auto">
      <div class="flex">
        <div class="flex flex-col justify-center space-y-4">
          <h1 class=" font-semibold text-shadow-md">方向介绍</h1>
          <p class=" text-shadow-sm">滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </div>
        <img src="~/assets/discovery.svg" alt="" srcset="">
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div 
          v-for="dir in directions" 
          :key="dir.name"
          class=" rounded-3xl bg-white space-y-4 p-8">
          <h3 
            :class="dir.class"
            class=" text-xl">{{ dir.name }}</h3>
          <p class=" text-gray-600">滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <button class=" px-3 py-2">了解更多</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class DirectionsPage extends Vue {
  private directions = [{
    class: 'text-yellow-600',
    icon: '',
    name: '游戏开发',
    desc: '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。'
  }, {
    class: 'text-blue-600',
    icon: '',
    name: 'Web 开发',
    desc: '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。'
  }, {
    class: 'text-green-600',
    icon: '',
    name: '移动开发',
    desc: '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。'
  }, {
    class: 'text-red-600',
    icon: '',
    name: '人工智能',
    desc: '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。'
  }]
}

</script>