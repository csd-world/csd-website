<template>
  <div>
    <div class="w-96">
      <lottie :options="lottieOptions" v-on:animCreated="handleAnimation" />
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