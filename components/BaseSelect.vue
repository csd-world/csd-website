<template>
  <ValidationProvider
    v-slot="{ errors, invalid, validated }"
    ref="provider"
    :name="label"
    :rules="rules"
    :value="selectedValue"
    tag="div">
    <label 
      :class="{ 'required': rules.includes('required') }"
      class="block text-gray-700 mb-2">
      {{ label }}
    </label>
    <div 
      v-click-outside="clickOutside"
      class="mt-1 relative">
      <button 
        @click="showOption = !showOption"
        type="button" 
        class="relative w-full rounded-lg pl-3 pr-10 py-2 text-left cursor-pointer bg-gray-100 text-gray-700 border-2 border-gray-100 focus:border-primary text-sm"
        :class="{ 'border-primary': showOption }" 
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label">
        <span class="flex items-center">
          <span class="block truncate">
            {{ selectedIndex === -1 ? '选择方向' : options[selectedIndex].name }}
          </span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>

      <!--
        Select popover, show/hide based on select state.

        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-100"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <ul 
        v-if="showOption"
        class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" 
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3">
        <li
          v-for="(option, index) in options"
          :key="option.value" 
          @click="select(index)"
          class="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
          role="option">
          <div class="flex items-center">
            <span 
              class="block truncate"
              :class="{ 'font-semibold': index === selectedIndex }"
            >
              {{ option.name }}
            </span>
          </div>

          <span
            v-if="index === selectedIndex" 
            class="text-primary absolute inset-y-0 right-0 flex items-center pr-4">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </span>
        </li>

      </ul>
    </div>
    <BaseInputError v-if="validated && invalid" :msg="errors[0]" />
  </ValidationProvider>
</template>

<script lang="ts">
import { Vue, Component, Prop, VModel, Watch, Ref } from 'nuxt-property-decorator'
import { ValidationProvider } from 'vee-validate'

@Component({
  components: {
    ValidationProvider
  }
})
export default class BaseSelect extends Vue {
  private showOption = false
  private selectedIndex = -1

  @Ref('provider') private readonly provider!: InstanceType<typeof ValidationProvider>
  @Prop({ required: true }) readonly label!: string
  @Prop({ required: true }) private options!: { name: string, value: string }[]
  @Prop({ required: false, default: '' }) readonly rules!: string
  @VModel() selectedValue!: string

  async select(index: number) {
    this.selectedIndex = index
    this.showOption = false
    const selectedValue = this.options[this.selectedIndex].value
    this.provider.syncValue(selectedValue)
    await this.provider.validate()
    
  }

  private clickOutside() {
    if (this.showOption) this.showOption = false
  }
  
  mounted() {
    this.provider.syncValue('')
  }

  @Watch('selectedIndex')
  onSelectedChange(val: number) {
    this.selectedValue = val === -1 ? '' : this.options[val].value
  }
}
</script>

<style lang="postcss" scoped>
  label.required::before {
    @apply text-red-600;
    content: "*";
    margin-right: 4px;
  }
</style>