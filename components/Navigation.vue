<template>
  <div id="navigation" class="w-full fixed z-[200] top-4 right-5 flex justify-end">
    <div class="w-6 cursor-pointer sm:hidden" @click="open = !open">
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
      class="fixed inset-0 bg-primary-darker h-0 opacity-0 transition-all sm:opacity-100 sm:h-auto sm:inset-auto sm:bg-transparent"
      :class="{ '!h-full !opacity-100': open }">
      <ul
        class="absolute top-1/2 transform -translate-y-1/2 w-full text-shadow-md flex-col sm:justify-end items-center space-x-8 space-y-4 hidden sm:flex sm:flex-row sm:space-y-0 sm:static sm:translate-y-0"
        :class="{ '!flex': open }">
        <li>
        </li>
        <li class="nav-item">
          <a
            target="_blank"
            href="https://wiki.dsstudio.tech/w/%E9%A6%96%E9%A1%B5">
            软件部 WIKI
          </a>
        </li>
        <li>
          <BaseButton
            :color="'info'"
            :icon="'github'"
            :link="'https://github.com/Z233/csd-website'">
            <span>在 Github 上查看</span>
          </BaseButton>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/BaseButton.vue'
export default {
  data() {
    return {
      open: false,
      nav: null
    }
  },
}
</script>

<style lang="postcss" scoped>
  .nav-item {
    position: relative;
  }

  .nav-item a {
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
  }
</style>