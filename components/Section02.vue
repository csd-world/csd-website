<template>
  <div class="flex flex-col sm:flex-row px-4 sm:px-0 relative">
    <div 
      class="absolute p-1/8 bg-white bg-opacity-20 rounded-1/4 top-[-35%] left-[65%] sm:top-[-34%] sm:left-[25%]"></div>
    <div 
      class="absolute p-1/10 bg-white bg-opacity-20 rounded-1/4 top-[-19%] left-[53%] sm:top-[11%] sm:left-[17%]" />
    <div 
      class="absolute p-1/12 bg-white bg-opacity-20 rounded-1/4 top-[130%] left-[-5%] sm:top-[80%] sm:left-[0%]" />
    <div 
      class="absolute p-1/12 bg-white bg-opacity-20 rounded-1/4 top-[120%] left-[5%] sm:top-[110%] sm:left-[-10%]" />
    <div class="flex-1">
      <h2 class="mb-6">一个自由的技术社团</h2>
      <p class="text-xl">在这里，你能接触到各种各样的前沿技术。我们奉承自由的极客精神，你可以学习任何你想学习的东西。</p>
    </div>
    <div class="relative flex-1 mt-12 sm:mt-24">
      <div class="absolute w-full h-5/6 inset-0 bg-yellow-50 rounded-1/2"></div>
      <lottie class="transform scale-125" :options="lottieOptions" v-on:animCreated="handleAnimation" />
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import blogging from '~/assets/json/blogging.json'

export default {
  components: {
    lottie,
  },
  data() {
    return {
      anim: null,
      lottieOptions: { animationData: blogging }
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    }
  }
}
</script>
