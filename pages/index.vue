<template>
  <div class="relative bg-[#8f94fb]">
    <Navigation :fixed="true" />
    <no-ssr>
      <full-page :options="options">
        <div class="section section01">
          <div class="section-wrapper">
            <Section01 />
          </div>
        </div>
        <div class="section section02">
          <div class="section-wrapper">
            <Section02 v-if="defer(7)" />
          </div>
        </div>
        <div class="section section03">
          <div class="section-wrapper">
            <Section03 v-if="defer(8)" />
          </div>
        </div>
        <div class="section section04">
          <div class="section-wrapper">
            <Section04 v-if="defer(9)" />
          </div>
        </div>
        <div class="section section05">
          <div class="section-wrapper">
            <Section05 v-if="defer(10)" />
          </div>
        </div>
      </full-page>
    </no-ssr>
  </div>
</template>

<script lang="ts">
import bus from "~/utils/bus";
import { Component, Vue } from "nuxt-property-decorator";
import { options } from "~/type";
import {
  Section01,
  Section02,
  Section03,
  Section04,
  Section05
} from "~/views/index";

@Component({
  components: {
    Section01,
    Section02,
    Section03,
    Section04,
    Section05
  }
})
export default class Index extends Vue {
  private options: options = {
    anchors: ["welcome", "free", "creative", "comehere", "waitforyou"],
    sectionsColor: ["#4e54c8", "#8f94fb", "#8f94fb", "#8f94fb"],
    navigation: true,
    navigationTooltips: [
      "欢迎加入软件部",
      "一个自由的技术社团",
      "一群充满创造力的人",
      "你也可以成为技术达人",
      "期待你的到来"
    ],
    onLeave: (origin, destination) => {
      bus.$emit("onLeave", {
        origin,
        destination
      });
    },
    afterLoad: (origin, destination) => {
      bus.$emit("afterLoad", {
        origin,
        destination
      });
    }
  };

  private displayPriority = 0;
  private runDisplayPriority(count = 10) {
    const step = () => {
      requestAnimationFrame(() => {
        this.displayPriority++;
        if (this.displayPriority < count) step();
      });
    };
    step();
  }
  private defer(priority: number) {
    return this.displayPriority >= priority;
  }

  mounted() {
    this.runDisplayPriority();
  }
}
</script>

<style lang="postcss">
.section {
  overflow: hidden;
}

.section-wrapper {
  @apply !container !mx-auto px-4 sm:px-6;
}

.section01 {
  background: #4e54c8;
  background: linear-gradient(#4e54c8, #8f94fb);
  color: white;
  transition: all 0.2s ease;
}

.section02 {
  background: white;
}

.section05 {
  background: linear-gradient(#8f94fb, #4e54c8);
}

// improve performance
.fp-section:not(.active):not(.fp-completely) {
  visibility: hidden;
}

#fp-nav ul li,
.fp-slidesNav ul li {
  margin: 0;
}

#fp-nav ul,
.fp-slidesNav ul {
  @apply space-y-1;
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  background: rgba(255, 255, 255, 0.75) !important;
}

#fp-nav.fp-right {
  @apply !right-1;
}

@media (min-width: 640px) {
  #fp-nav.fp-right {
    right: 1rem !important;
  }
}
</style>
