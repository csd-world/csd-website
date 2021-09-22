<template>
  <ValidationProvider 
    v-slot="{ errors, invalid, validated }"
    class="flex flex-col" 
    tag="div"
    :name="label"
    :rules="rules">
    <label 
      :class="{ 'required': rules.includes('required') }"
      class="text-gray-700 mb-2" :for="name">{{ label }}</label>
    <input 
      v-model="inputValue"
      @mousewheel.prevent=""
      class="bg-gray-100 rounded-lg h-9 text-gray-700 outline-none border-2 border-gray-100 focus:border-primary px-3 text-sm" :type="type" :name="name">
    <BaseInputError v-if="validated && invalid" :msg="errors[0]" />
  </ValidationProvider>
</template>

<script lang="ts">
import { Vue, Component, Prop, ModelSync, VModel } from 'nuxt-property-decorator'
import { ValidationProvider } from 'vee-validate'

@Component({
  components: {
    ValidationProvider
  }
})

export default class BaseInput extends Vue {
  @Prop({ required: true }) readonly label!: string
  @Prop({ required: true }) readonly type!: string
  @Prop({ required: true }) readonly name!: string
  @Prop({ required: false }) readonly rules!: string
  @VModel() inputValue!: string | number
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

label.required::before {
  @apply text-red-600;
  content: "*";
  margin-right: 4px;
}

</style>