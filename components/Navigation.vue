<template>
  <div id="navigation" class="w-full fixed z-50 top-4 right-5">
    <ul class="text-shadow-md flex justify-end items-center space-x-8">
      <li class="nav-item">
        <a 
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
</template>

<script>
import BaseButton from '~/components/BaseButton.vue'
export default {

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
    @apply bg-primary left-0 w-full h-1;
  }

  .nav-item a:hover {
    color: rgba(255, 255, 255, 0.85);
  }

  .nav-item a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
</style>