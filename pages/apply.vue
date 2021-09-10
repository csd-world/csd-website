<template>
  <div class="relative bg-gray-200 flex flex-col items-center min-h-screen">
    <div class="flex flex-col items-center bg-primary w-full">
      <Navigation />
      <div class="container">
        <div class="w-full px-8 sm:px-0">
          <div class="flex">
            <div
              class="tab mr-4"
              :class="{ 'current': curIndex === 0 }"
              @click="curIndex = 0">大一</div>
            <div
              class="tab"
              :class="{ 'current': curIndex === 1 }"
              @click="curIndex = 1">大二</div>
          </div>
        </div>
      </div>
      <div class="w-full bg-black bg-opacity-[0.35]">
        <div
          class="container mx-auto py-10 grid grid-cols-3 relative px-4 sm:px-0">
          <div class="col-span-3 sm:col-span-2">
            <h3>加入软件部</h3>
            <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          </div>
          <div class=" sm:col-span-1 relative hidden sm:block">
            <img src="~/assets/join.svg" class="absolute left-1/2 -translate-x-1/2">
          </div>
        </div>
      </div>
    </div>
    <div class="container flex-grow px-4 flex flex-col-reverse sm:px-0 sm:grid sm:grid-cols-3 sm:space-x-4">
      <div v-if="curIndex === 0" class="form">
        <div class="flex space-y-4 sm:space-y-0 sm:space-x-12 sm:flex-row flex-col">
          <BaseInput :label="'学号'" class="w-64" :type="'number'" />
          <BaseInput :label="'姓名'" class="w-32" :type="'text'" />
        </div>
        <BaseCheckbox :label="'我有编程基础'" />
        <BaseTextarea :label="'聊聊你学过的东西，以及用来做过哪些有趣的事'" />
        <BaseTextarea :label="'说说你为什么想加入软件部'" />
        <button class=" bg-primary py-2 px-3 rounded-lg hover:bg-primary-darker">提交报名表</button>
      </div>
      <div v-if="curIndex === 1" class="form">
        <div class="flex space-y-4 sm:space-y-0 sm:space-x-12 sm:flex-row flex-col">
          <BaseInput :label="'学号'" class="w-64" :type="'number'" />
          <BaseInput :label="'姓名'" class="w-32" :type="'text'" />
        </div>
        <BaseTextarea :label="'说说你为什么想加入软件部'" />
        <button class=" bg-primary py-2 px-3 rounded-lg hover:bg-primary-darker">提交报名表</button>
      </div>
      <div class="h-32 col-span-1 bg-white mt-4 sm:mt-0 sm:relative sm:top-32 rounded-lg">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator' 

@Component
export default class ApplyPage extends Vue {
  private curIndex = 0
}
</script>

<style lang="postcss" scoped>
  .tab {
    @apply flex-grow text-center py-2 sm:py-3 bg-black bg-opacity-40 rounded-t-lg text-sm cursor-pointer hover:bg-opacity-30;
  }

  .tab.current {
    @apply bg-black bg-opacity-[0.35] hover:bg-opacity-30;
  }

  h3 {
    @apply text-2xl mb-2 font-semibold;
  }
</style>

<style lang="postcss" scoped>
  .form {
    @apply bg-white p-6 space-y-4 sm:col-span-2 mt-4 sm:mt-0 rounded-lg mb-4 sm:rounded-b-lg sm:rounded-t-none;
  }
</style>