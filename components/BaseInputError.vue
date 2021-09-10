<template>
  <div 
    style="animation: shake 0.6s ease-in-out;"
    class="mt-2 ml-2">
    <span class="text-xs bg-red-600 px-2 py-1 rounded-lg whitespace-nowrap text-gray-50 translate-x-0">
      <span class="mr-1">⚠</span>{{ msg }}
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BaseInputError extends Vue {
  @Prop({ required: true }) readonly msg!: string
}
</script>

<style lang="postcss">
  @keyframes shake {
   0% {
      transform: translateX(0)
    }
    12.5% {
      transform: translateX(-6px) rotateY(-9deg)
    }
    37.5% {
      transform: translateX(5px) rotateY(7deg)
    }
    62.5% {
      transform: translateX(-3px) rotateY(-5deg)
    }
    87.5% {
      transform: translateX(2px) rotateY(3deg)
    }
    100% {
      transform: translateX(0)
    }
  }
</style>