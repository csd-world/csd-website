<template>
  <div class="flex flex-col sm:flex-row  relative">
    <div class="triangle triangle1"></div>
    <div class="triangle triangle2"></div>
    <div class="triangle triangle3"></div>
    <div class="triangle triangle4"></div>
    <div class="flex-[0.8] relative sm:mt-12">
      <div class="pb-full" style="padding-bottom: 100%">
        <div
          class="absolute h-full w-5/6 bg-yellow-50 rounded-1/2 top-1/2 
          left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          class="absolute h-[140%] w-[140%] top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 flex items-center"
          ref="animationContainer"
        >
          <img src="/creative.webp" alt="Creative">
        </div>
      </div>
    </div>
    <HeroText
      title="一群充满创造力的人"
      content="软件部汇聚了一群精通技术又充满创造力的人，他们在自己专注的方向上大放异彩。"
    />
  </div>
</template>

<script lang="ts">
import animationMixin from "~/mixins/animationMixin";
const animationData = () => import("~/assets/json/creative.json" as any);
export default animationMixin(animationData, 2).extend();
</script>

<style lang="postcss">
/* TODO refactor with scss */
.triangle1 {
  transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
  @apply p-1/10 top-[90%] right-[60%] sm:right-[4%] sm:top-[15%];
}

.triangle2 {
  transform: rotate(-105deg) skewX(-30deg) scale(1, 0.866);
  padding: 10%;
  @apply p-1/10 right-[46%] top-[101%] sm:right-[-12%] sm:top-[50%];
}

.triangle3 {
  transform: rotate(-105deg) skewX(-30deg) scale(1, 0.866);
  padding: 5%;
  @apply right-[88%] top-[-8%] sm:right-[98%] sm:top-[-13%];
}

.triangle4 {
  padding: 5%;
  transform: rotate(-45deg) skewX(-30deg) scale(1, 0.866);
  @apply right-[77%] top-[-8%] sm:right-[83%] sm:top-[-15%];
}
.triangle {
  background: white;
  text-align: left;
  opacity: 0.2;
  @apply absolute z-0;
}
.triangle:before,
.triangle:after {
  content: "";
  position: absolute;
  background-color: inherit;
  padding: 50%;
  top: 0;
  left: 0;
}
.triangle,
.triangle:before,
.triangle:after {
  border-top-right-radius: 30%;
}

.triangle:before {
  transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
    translate(0, -50%);
}
.triangle:after {
  transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
}
</style>
