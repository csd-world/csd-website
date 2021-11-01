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
          <BaseInput v-model="user.studentId" :name="'stdId'" :rules="'required|gradeTwo'" class=" col-span-1" :label="'学号'" :type="'number'" />
          <BaseInput v-model="user.studentName" :rules="'required|name'" :name="'stdName'" :label="'姓名'"  :type="'text'" />
        </div>
        <div class="input-row">
          <BaseInput v-model="user.qq" :name="'qq'" :rules="'required'" :label="'QQ'" class=" col-span-1" :type="'number'" />
          <BaseInput v-model="user.email" :rules="'required|email'" :name="'email'" :label="'邮箱'"  :type="'text'" />
        </div>
        <div class="input-row">
          <BaseSelect 
            v-model="user.direction"
            :rules="'required'"
            :label="'方向'"
            :options="directionOptions" />
        </div>
        <BaseTextarea
          v-model="user.selfIntro" 
          :rules="'required'"
          :name="'prgExp'"
          :label="'聊聊你学过的东西，以及参与过的项目'" />
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
          <li>报名表的信息尤为关键，这是我们决定是否给你发送面试邮件的重要依据。</li>
          <li>面试会在每个月的第三周周末进行。</li>
          <li>发送面试邮件之后会在群里发通知。</li>
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
export default class ApplyFormTwo extends mixins(applyMixin) {
  grade: 1 | 2 = 2
  user: UserModel = {
    selfIntro: '',
    studentId: '',
    studentName: '',
    whyJoin: '',
    qq: '',
    email: '',
    direction: ''
  }

  private directionOptions = [{
    name: "Web 开发",
    value: "web"
  }, {
    name: "游戏开发",
    value: "game"
  }, {
    name: "人工智能",
    value: "ai"
  }, {
    name: "移动开发",
    value: "mobile"
  }]

}
</script>
