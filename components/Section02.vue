<template>
  <div class="flex flex-col sm:flex-row px-4 sm:px-0">
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
    lottie
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