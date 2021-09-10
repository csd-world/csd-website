<template>
  <div id="navigation" class="py-4 sm:pl-5 pr-5 sm:pr-0 w-full justify-end sm:justify-start flex"
  :class="{ 
    'fixed z-[200] sm:left-0': fixed,
    ' sm:self-stretch': !fixed
  }">
    <div class="w-6 cursor-pointer sm:hidden relative z-[200]" @click="open = !open">
      <div class="h-1 py-2 box-content bg-clip-content w-full relative opacity-50 text-white bg-white before:block before:h-1 before:w-full before:absolute before:top-0 before:bg-current after:block after:h-1 after:w-full after:absolute after:bottom-0 after:bg-current before:transition-transform after:transition-transform transition-all"
      :class="{
        [
          'before:translate-y-[8.5px] before:translate-x-0 before:rotate-45  ' +
          'after:translate-y-[-8.5px] after:translate-x-0 after:-rotate-45  ' + 
          'bg-transparent !text-white z-10 opacity-100'
        ]: open
        }" />
    </div>
    <div
      class="inset-0 bg-primary-darker h-0 opacity-0 transition-all sm:opacity-100 sm:h-auto sm:inset-auto sm:bg-transparent"
      :class="{ '!h-full !opacity-100': open, 'fixed': fixed, 'fixed sm:static z-[100]': !fixed }">
      <ul
        class="absolute top-1/2 transform -translate-y-1/2 w-full text-shadow-md flex-col  items-center sm:space-x-8 space-y-4 hidden sm:flex sm:flex-row sm:space-y-0 sm:static sm:translate-y-0"
        :class="{ '!flex': open }">
        <li class="sm:mr-4">
          <a href="/">
            <img class="h-14" src="~/assets/logo.png">
          </a>
        </li>
        <nuxt-link 
          :key="item.name"
          v-for="item in items" 
          :to="item.path">
          <li 
            class="nav-item"
            :class="{ 'current': curRouteName === item.name  }" >
              {{ item.title }}
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Navigation extends Vue {
  @Prop({ default: false }) fixed!: boolean
  private open = false
  private nav = null
  private items = [{
    title: '首页',
    name: 'index',
    path: '/'
  }, {
    title: '报名',
    name: 'apply',
    path: '/apply'
  }]
  private curRouteName = this.$router.currentRoute.name
}
</script>

<style lang="postcss" scoped>
  .nav-item {
    @apply relative select-none hover:bg-black hover:bg-opacity-40 font-semibold px-6 py-2 rounded-lg cursor-pointer;
  }

  .nav-item.current {
    @apply bg-black bg-opacity-30 hover:bg-opacity-40;
  }

  /* .nav-item a {
    transition: transfrom 0.5s;
  }

  .nav-item a::after {
    position: absolute;
    content: "";
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
    top: 120%;
    @apply bg-white bg-opacity-80 left-0 w-full h-1;
  }

  .nav-item a:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  .nav-item a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  } */
</style>