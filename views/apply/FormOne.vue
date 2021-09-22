<template>
  <div 
    class="container flex-grow px-4 flex flex-col-reverse sm:px-0 sm:grid sm:grid-cols-3 sm:space-x-4">
    <ValidationObserver
      v-slot="{ handleSubmit }"
      ref="observer"
      tag="div" 
      class="form">
      <form
        @submit.prevent="handleSubmit(onSubmit($event))"
        class="space-y-4"
        >
        <div class="input-row">
          <BaseInput v-model="user.studentId" :name="'stdId'" :rules="'required|gradeOne'" class=" col-span-1" :label="'学号'" :type="'number'" />
          <BaseInput v-model="user.studentName" :rules="'required|name'" :name="'stdName'" :label="'姓名'"  :type="'text'" />
        </div>
        <div class="input-row">
          <BaseInput v-model="user.qq" :name="'qq'" :rules="'required'" :label="'QQ'" class=" col-span-1" :type="'number'" />
          <BaseInput v-model="user.email" :rules="'email'" :name="'email'" :label="'邮箱'"  :type="'text'" />
        </div>
        <BaseCheckbox v-model="user.hadLearn" :label="'我有编程基础'" />
        <BaseTextarea
          v-model="user.selfIntro" 
          v-show="user.hadLearn" :name="'prgExp'" :label="'聊聊你学过的东西，以及用来做过哪些有趣的事'" />
        <BaseTextarea
          v-model="user.whyJoin"
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
    </ValidationObserver>
    <div class="col-span-1">
      <div class=" bg-white mt-4 sm:mt-0 sm:relative sm:top-32 rounded-lg text-gray-600 p-6 space-y-2">
        <h4 class="text-xl font-medium">注意事项：</h4>
        <ul class="list-disc pl-4 space-y-2">
          <li>报名表可以让我们对你有个大概的了解，请务必如实认真填写。</li>
          <li>如果你有不错的编程基础，并且已经开发了自己的软件，可以主动联系管理员进入特招流程。</li>
          <li>遇到如提交不了等其他问题，请到群里联系管理员反馈。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Ref } from 'nuxt-property-decorator'
import applyMixin from '~/mixins/applyMixin'
import { ValidationObserver } from 'vee-validate'
import '~/styles/apply-form.css'
import { UserModel } from '~/type'

@Component({
  components: { ValidationObserver }
})
export default class ApplyFormOne extends mixins(applyMixin) {
  user: UserModel = {
    hadLearn: false,
    selfIntro: '',
    studentId: '',
    studentName: '',
    whyJoin: '',
    qq: '',
    email: ''
  }
}
</script>
