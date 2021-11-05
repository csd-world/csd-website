<template>
  <div class="flex-1 flex flex-col justify-center items-start">
    <h2 class="mb-6">{{ title }}</h2>
    <p class="text-shadow-md">
      {{ content }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class HeroText extends Vue {
  @Prop({ required: true }) readonly title!: string
  @Prop({ required: true }) readonly content!: string
}
</script>