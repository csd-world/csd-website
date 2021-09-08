<template>
  <div>
    <div class="area absolute inset-0" >
      <ul class="circles select-none">
        <li v-for="i in 10" :key="i"></li>
      </ul>
    </div>
    <div class="text-center container space-y-4 relative">
      <h1 class="text-shadow-md"><span class="invisible sm:static">🎉 </span>欢迎加入软件部<span class="cursor-pointer select-none" @click="hey($event)"> 🎉</span></h1>
      <p class="text-xl text-shadow-sm px-6">软件部隶属于桂电创新创业基地，致力于软件方面的学习和开发，我们期待您的加入！</p>
      <div class="space-x-1 sm:space-x-4">
        <BaseButton
          :color="'primary'"
          :icon="'QQ'"
          :link="'https://qm.qq.com/cgi-bin/qm/qr?k=qFBqHqGYgwYHTiSgq-1P82WSQ2LsUcI2&jump_from=webapi'">
          <span>加入群聊</span>
        </BaseButton>
        <BaseButton
          :border="2"
          :link="'https://wiki.dsstudio.tech/w/%E5%88%86%E7%B1%BB:%E6%96%B0%E7%94%9F%E4%B8%93%E9%A2%98'">
          <span>新生专题</span>
        </BaseButton>
      </div>
    </div>
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-70">
      <div class="animate-bounce flex flex-col items-center">
        <div class="mb-1">下拉了解更多</div>
        <span class="gg-chevron-down"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from '~/components/BaseButton.vue'
import party from 'party-js'

export default {
  methods: {
    hey(event: PointerEvent) {
      const e = event.target as HTMLElement
      party.confetti(e, {
        count: party.variation.range(60, 80),
      })
    }
  }
}
</script>