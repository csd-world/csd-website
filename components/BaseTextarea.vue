<template>
  <div class="flex flex-col">
    <label class="text-gray-700 mb-2" :for="name">{{ label }}</label>
    <textarea :name="name" rows="5" class="bg-gray-100 rounded-lg outline-none border-2 border-gray-100 focus:border-primary text-sm  text-gray-700 pl-2 pt-2"></textarea>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BaseInput extends Vue {
  @Prop({ required: true }) readonly label!: string
  @Prop({ required: true }) readonly name!: string
}
</script>