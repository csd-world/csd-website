<template>
  <a
    target="_blank" 
    :href="link">
    <button
      :class="{
        ['hover:bg-' + color + '-darker bg-' + color]: !!color,
        ['border-' + border]: true,
        ['bg-black bg-opacity-0 hover:bg-opacity-5']: !!!color
      }"
      class="box-border h-12 min-w-32 rounded-full">
      <div
        :class="{
          'mx-5': true
        }"
        class="space-x-1">
        <span
          v-if="!!icon"
          class="iconfont"
          :class="'icon-' + icon"></span>
        <slot></slot>
      </div>
    </button>
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
    }
  },
}
</script>