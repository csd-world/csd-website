<template>
  <a :href="href" target="_blank">
    <div class="bg-white p-6 rounded-lg space-y-2 shadow hover:shadow-xl transition-shadow">
      <img class="h-12" :src="require(`~/assets/img/${logo}`)" alt="Computer software department logo">
      <h4>{{ name }}</h4>
      <p class=" text-gray-400">{{ intro }}</p>
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
  @Prop() private intro!: string
}
</script>

<style lang="postcss" scoped>
  h4 {
    @apply text-xl text-gray-800 font-medium;
  }
</style>