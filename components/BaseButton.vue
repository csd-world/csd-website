<template>
  <a
    class="inline-block select-none"
    :target="target" 
    :href="link">
    <button
      :class="{
        ['hover:bg-' + color + '-darker bg-' + color]: !!color,
        ['border-' + border]: true,
        ['bg-black bg-opacity-0 hover:bg-opacity-5']: !color
      }"
      class="box-border h-12 min-w-32 rounded-full">
      <div
        :class="{
          'mx-5': true
        }"
        class="space-x-1 text-center">
        <span
          v-if="!!icon"
          class="iconfont"
          :class="'icon-' + icon"></span>
        <slot></slot>
      </div>
    </button>
    <div class="hidden bg-primary bg-primary-lighter hover:bg-primary-darker border-2 bg-info hover:bg-info-darker"></div>
  </a>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    border: {
      type: Number,
      required: false,
      default: 0
    },
    link: {
      type: String,
      required: true
    },
    target: {
      required: false,
      type: String,
      default: '_blank'
    }
  },
}
</script>