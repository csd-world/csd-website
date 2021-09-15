<template>
  <div ref="introWrapper" class="flex mb-4">
    <div class="flex flex-col justify-center space-y-4">
      <h1 class=" font-semibold text-shadow-md">方向介绍</h1>
      <p class=" text-shadow-sm">{{ introduction }}</p>
    </div>
    <img class="sm:block hidden" :src="imgSrc" alt="" srcset="">
  </div>
</template>

<script lang="ts">
import { Vue, Component, ModelSync, Prop, Ref } from 'nuxt-property-decorator'


@Component
export default class DirectionHeader extends Vue {

  @Ref('introWrapper') private introWrapper!: HTMLElement
  @Prop({ required: true }) private introduction!: string
  @Prop({ required: true }) private imgSrc!: string


  @ModelSync('navColor', 'change', { type: String })
  private navColorValue!: string

  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        this.navColorValue = entry.isIntersecting ? 'white' : 'primary'
      },
      { threshold: 0.0 }
    )
    observer.observe(this.introWrapper)
  }
}
</script>