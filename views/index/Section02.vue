<template>
  <div class="flex flex-col sm:flex-row sm:space-x-4 relative">
    <div
      class="absolute p-1/8 bg-white bg-opacity-20 rounded-1/4 
      top-[-35%] left-[65%] sm:top-[-34%] sm:left-[25%]"
    ></div>
    <div
      class="absolute p-1/10 bg-white bg-opacity-20 rounded-1/4 
      top-[-19%] left-[53%] sm:top-[11%] sm:left-[17%]"
    />
    <div
      class="absolute p-1/12 bg-white bg-opacity-20 rounded-1/4 
      top-[130%] left-[-5%] sm:top-[80%] sm:left-[0%]"
    />
    <div
      class="absolute p-1/12 bg-white bg-opacity-20 rounded-1/4 
      top-[120%] left-[5%] sm:top-[110%] sm:left-[-10%]"
    />
    <HeroText
      title="一个自由的技术社团"
      content="在这里，你能接触到各种各样的前沿技术。我们奉承自由的极客精神，你可以学习任何你想学习的东西。"
    />
    <div class="relative flex-1 mt-16 sm:mt-24">
      <div
        class="absolute px-[40%] py-[30%] inset-0 bg-yellow-50 rounded-1/2"
      ></div>
      <div class="transform scale-125" ref="animationContainer">
        <img src="/blogging.webp" alt="Blogging">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import animationMixin from '~/mixins/animationMixin'
const animationData = () => import("~/assets/json/blogging.json" as any);
export default animationMixin(animationData, 1).extend()
</script>
