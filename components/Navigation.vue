<template>
  <div 
    id="navigation" 
    ref="navigation"
    class="py-4 sm:pl-5 pr-5 sm:pr-0 w-full justify-end sm:justify-start flex"
    :class="{ 
      'fixed z-[200] sm:left-0': fixed,
      ' sm:self-stretch': !fixed,
      ' sticky top-0 sm:static sm:top-auto': sticking,
    }">
    <div class="w-6 cursor-pointer sm:hidden relative z-[200]" @click="open = !open">
      <div 
        class="h-1 py-2 box-content bg-clip-content w-full relative opacity-100   before:block before:h-1 before:w-full before:absolute before:top-0 before:bg-current after:block after:h-1 after:w-full after:absolute after:bottom-0 after:bg-current before:transition-transform after:transition-transform transition-all bg-white"
        :class="{
          [
            'before:translate-y-[8.5px] before:translate-x-0 before:rotate-45  ' +
            'after:translate-y-[-8.5px] after:translate-x-0 after:-rotate-45  ' + 
            'bg-transparent !text-white z-10 opacity-100'
          ]: open,
          ['!bg-transparent ' + 'text-' + color]: open
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
            :class="[{ [currentClasses]: routeName === item.name  }, hoverClasses]" >
              {{ item.title }}
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref, Watch } from 'nuxt-property-decorator'

@Component
export default class Navigation extends Vue {
  @Ref('navigation') private navigation!: HTMLElement
  @Prop({ default: false }) fixed!: boolean
  @Prop({ required: false, default: 'white' }) color!: string
  @Prop({ required: false, default: ' hover:bg-black hover:bg-opacity-40' }) hoverClasses!: string
  @Prop({ required: false, default: ' bg-black bg-opacity-30 hover:bg-opacity-40' }) currentClasses!: string
  private open = false
  private nav = null
  private items = [{
    title: '首页',
    name: 'index',
    path: '/'
  }, {
    title: '方向',
    name: 'directions',
    path: '/directions'
  }, {
    title: '报名',
    name: 'apply',
    path: '/apply'
  }]
  private observer!: IntersectionObserver
  private sticking = false

  get cssProps() {

  }

  get routeName()  {
    return this.$route.name
  } 

  mounted() {
    this.observer = new IntersectionObserver(
      ([entry]) => { this.sticking = !(entry as any).isVisible; console.log(entry);
        },
      { threshold: 0.0 }
    )
    this.observer.observe(this.navigation)
  }
}
</script>

<style lang="postcss" scoped>
  .nav-item {
    @apply relative select-none font-semibold px-6 py-2 rounded-lg cursor-pointer;
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