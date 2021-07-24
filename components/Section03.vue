<template>
  <div class="flex flex-col sm:flex-row px-4 sm:px-0 sm:space-x-24">
    <div class="flex-1 relative sm:mt-12">
      <div class="pb-full" style="padding-bottom: 100%">
        <div class="absolute h-full w-5/6 bg-yellow-50 rounded-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <lottie class="absolute scale-150 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" :options="lottieOptions" v-on:animCreated="handleAnimation" />
      </div>
    </div>
    <div class="flex-1 mt-12">
      <h2 class="mb-6">一群充满创造力的人</h2>
      <p class="text-xl">软件部汇聚了一群精通技术又充满创造力的人，他们在自己专注的方向上大放异彩。</p>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import creative from '~/assets/json/creative.json'

export default {
  components: {
    lottie
  },
  data() {
    return {
      anim: null,
      lottieOptions: { animationData: creative }
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    }
  }
}
</script>