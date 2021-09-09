<template>
  <div class="flex flex-col">
    <label class="text-gray-700 mb-2 font-medium" :for="label">{{ label }}</label>
    <input class="bg-gray-100 rounded-lg h-9 text-gray-700 outline-none border-2 border-gray-100 focus:border-primary pl-2 text-sm" :type="type" :name="label">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BaseInput extends Vue {
  @Prop({ required: true }) readonly label!: string
  @Prop({ required: true }) readonly type!: string
}
</script>

<style lang="postcss" scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>