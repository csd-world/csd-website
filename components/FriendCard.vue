<template>
  <a :href="href" target="_blank">
    <div class="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow flex items-center space-x-2">
      <img class="h-8" :src="logo" alt="Computer software department logo">
      <span class="text-gray-800">{{ name }}</span>
    </div>
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class FriendCard extends Vue {
  @Prop({ required: true }) private href!: string
  @Prop({ required: true }) private logo!: string
  @Prop() private name!: string
}
</script>

<style lang="postcss" scoped>
  h4 {
    @apply text-xl text-gray-800 font-medium;
  }
</style>