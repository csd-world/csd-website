<template>
  <ValidationProvider 
    v-slot="{ errors, invalid, validated }"
    class="flex flex-col" 
    tag="div"
    :name="label"
    :rules="rules">
    <label 
      :class="{ 'required': rules ? rules.includes('required') : false }"
      class="text-gray-700 mb-2" :for="name">{{ label }}</label>
    <textarea v-model="model" :name="name" rows="5" class="bg-gray-100 rounded-lg outline-none border-2 border-gray-100 focus:border-primary text-sm  text-gray-700 pl-2 pt-2"></textarea>
    <BaseInputError v-if="validated && invalid" :msg="errors[0]" />
  </ValidationProvider>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { ValidationProvider } from 'vee-validate'

@Component({
  components: {
    ValidationProvider
  }
})
export default class BaseInput extends Vue {
  @Prop({ required: true }) readonly label!: string
  @Prop({ required: true }) readonly name!: string
  @Prop({ required: false }) readonly rules!: string
  private model: string = ''
}
</script>