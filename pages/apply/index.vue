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
      <div class="w-full bg-black bg-opacity-[0.25]">
        <div
          class="container mx-auto py-10 grid grid-cols-3 relative px-4 sm:px-0">
          <div class="col-span-3 sm:col-span-2">
            <h3>加入软件部</h3>
            <p>{{ applyFormComponents[curIndex].intro }}<span class=" whitespace-nowrap">( •̀ ω •́ )✧</span></p>
          </div>
          <div class=" sm:col-span-1 relative hidden sm:block">
            <img src="~/assets/svg/join.svg" class="absolute left-1/2 -translate-x-1/2">
          </div>
        </div>
      </div>
    </div>
    <component 
      v-for="(form, index) in applyFormComponents" 
      :key="form.comp"
      :is="form.comp"
      v-show="curIndex === index"
    ></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator' 
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import ToastInterface from 'nuxt-tailvue/types/toast'
import ApplyFormOne from '~/views/apply/FormOne.vue'
import ApplyFormTwo from '~/views/apply/FormTwo.vue'

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
    ApplyFormOne,
    ApplyFormTwo
  }
})

export default class ApplyPage extends Vue {
  $toast!: ToastInterface
  private curIndex = 0


  private applyFormComponents = [{
    comp: 'ApplyFormOne',
    intro: '加入软件部的一般流程是：填写报名表 → 参加机试 → 参加面试 → 获得入部资格。在一切都没到来之前，先填个表吧！让我们认识一下你 '
  }, {
    comp: 'ApplyFormTwo',
    intro: '经这条途径加入软件部的流程是：填写表格 → 得到面试通知→ 参加面试 → 得到面试结果 → 获得入部资格。那么下面请坐和放宽，认真填写下面这份表格吧 '
  }]

  private applyFailToast(msg: string) {
    this.$toast.show({
      type: 'danger',
      title: '报名失败',
      message: msg,
      timeout: 10
    })
  }
}

</script>

<style lang="postcss" scoped>
.tab {
  @apply flex-grow text-center py-2 sm:py-3 bg-black bg-opacity-40 rounded-t-lg text-sm cursor-pointer hover:bg-white hover:text-primary transition;
}

.tab.current {
  @apply bg-black bg-opacity-[0.25] hover:bg-white;
}
</style>