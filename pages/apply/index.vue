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
            <p>加入软件部的一般流程是：填写报名表 → 参加机试 → 参加面试 → 获得入部资格。在一切都没到来之前，先填个表吧！让我们认识一下你 <span class=" whitespace-nowrap">( •̀ ω •́ )✧</span></p>
          </div>
          <div class=" sm:col-span-1 relative hidden sm:block">
            <img src="~/assets/svg/join.svg" class="absolute left-1/2 -translate-x-1/2">
          </div>
        </div>
      </div>
    </div>
    <div 
      v-show="curIndex === 0"
      class="container flex-grow px-4 flex flex-col-reverse sm:px-0 sm:grid sm:grid-cols-3 sm:space-x-4">
      <ValidationObserver
        v-slot="{ handleSubmit }"
        ref="observer"
        tag="div" 
        class="form">
        <form
          @submit.prevent.once="handleSubmit(onSubmit($event))"
          class="space-y-4"
          >
          <div class="input-row">
            <BaseInput :name="'stdId'" :rules="'required|gradeOne'" class=" col-span-1" :label="'学号'" :type="'number'" />
            <BaseInput :rules="'required|name'" :name="'stdName'" :label="'姓名'"  :type="'text'" />
          </div>
          <div class="input-row">
            <BaseInput :name="'qq'" :rules="'required'" :label="'QQ'" class=" col-span-1" :type="'number'" />
            <BaseInput :rules="'email'" :name="'email'" :label="'邮箱'"  :type="'text'" />
          </div>
          <BaseCheckbox v-model="checked" :label="'我有编程基础'" />
          <BaseTextarea v-show="checked" :name="'prgExp'" :label="'聊聊你学过的东西，以及用来做过哪些有趣的事'" />
          <BaseTextarea 
            :rules="'required'"
            :name="'applyReason'" 
            :label="'说说你为什么想加入软件部'" />
          <button 
            :class="{ 'loading': loading }"
            :disabled="loading"  
            class="submit flex items-center">
            <BaseLoading v-if="loading" class="mr-1" />
            提交报名表</button>
        </form>
        <form v-show="curIndex === 1">
          <div class="mb-6"><p class="text-gray-700">报名暂未开放，请等待后续通知~</p></div>
          <button disabled class="submit">提交报名表</button>
        </form>
      </ValidationObserver>
      <div class="col-span-1">
        <div class=" bg-white mt-4 sm:mt-0 sm:relative sm:top-32 rounded-lg text-gray-600 p-6 space-y-2">
          <h4 class="text-xl font-medium">注意事项：</h4>
          <ul class="list-disc pl-4 space-y-2">
            <li>报名表可以让我们对你有个大概的了解，请务必如实认真填写。</li>
            <li>遇到如提交不了等其他问题，请到群里联系管理员反馈。</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-show="curIndex === 1" class="container px-4 flex flex-col-reverse sm:px-0 sm:grid sm:grid-cols-3 sm:space-x-4">
      <form class="form">
        <div><p class="text-gray-700">报名暂未开放，请等待后续通知~</p></div>
        <button disabled class=" bg-primary py-2 px-3 rounded-lg hover:bg-primary-darker disabled:bg-gray-300 cursor-not-allowed">提交报名表</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator' 
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { addUser } from '~/utils/api'

@Component({
  components: {
    ValidationObserver,
    ValidationProvider
  }
})

export default class ApplyPage extends Vue {
  $toast: any
  private curIndex = 0
  private checked = false
  private loading = false
  

  public onSubmit(e: Event) {
    if (this.$refs === undefined) return
    const observer = this.$refs.observer as InstanceType<typeof ValidationObserver> 

    observer.validate().then((valid: boolean) => {

      if (valid) {
        const { stdId, stdName, prgExp, applyReason, qq, email } = Object.fromEntries(new FormData(e.target as HTMLFormElement) as any) 
        
        addUser({
          hadLearn: this.checked,
          selfIntro: prgExp,
          studentId: stdId,
          studentName: stdName,
          whyJoin: applyReason,
          qq,
          email: email.trim().length === 0 ? qq + '@qq.com' : email
        }).then(response => {
          this.loading = false
          this.$router.push('/apply/success') 
        }).catch((e) => {
          this.applyFailToast(e)
        })
      }
    })
    .catch(e => {
      throw new Error(e)
    })
  }

  private applyFailToast(msg: string) {
    this.$toast.show({
      type: 'danger',
      title: '报名失败',
      message: msg,
      timeout: false
    })
  }
}

</script>

<style lang="postcss" scoped>
  .input-row {
    @apply grid sm:grid-cols-2 gap-4 sm:gap-12 sm:max-w-md;
  }
  /* .input-row {
    @apply flex space-y-4 sm:space-y-0 sm:space-x-12 sm:flex-row flex-col;
  } */
  .submit.loading {
    @apply bg-primary-lighter disabled:bg-primary-lighter
  }

  .submit {
    @apply  bg-primary py-2 px-3 rounded-lg hover:bg-primary-darker disabled:bg-gray-300 disabled:cursor-not-allowed;
  }

  .tab {
    @apply flex-grow text-center py-2 sm:py-3 bg-black bg-opacity-40 rounded-t-lg text-sm cursor-pointer hover:bg-white hover:text-primary transition;
  }

  .tab.current {
    @apply bg-black bg-opacity-[0.25] hover:bg-white;
  }

  h3 {
    @apply text-2xl mb-2 font-semibold;
  }

  .form {
    @apply bg-white p-6 space-y-4 sm:col-span-2 mt-4 sm:mt-0 rounded-lg mb-4 sm:rounded-b-lg sm:rounded-t-none;
  }
</style>