<template>
  <div class="px-2">
    <div class="bg-white bg-opacity-40 p-[1.5rem] rounded-[1.5rem] space-y-6">
      <div>
        <h2 class="mb-4 text-shadow-md">期待你的到来</h2>
        <p class="text-shadow-md">无论你是初入大学校门，还是已经习惯了大学生活，都有机会在软件部获得一席之地。</p>
      </div>
      <img src="~/assets/svg/welcome.svg">
      <BaseButton
        :color="'primary'"
        :icon="'QQ'"
        :link="'https://jq.qq.com/?_wv=1027&k=imP5b1Yu'">
        <span>加入群聊</span>
      </BaseButton>
    </div>
    <p class="absolute bottom-2 left-1/2 -translate-x-1/2 text-shadow-md opacity-80 w-auto text-sm whitespace-nowrap">
      © 2021 Designed & Coded with Love by Fronz
    </p>
  </div>
</template>

<script lang='ts'>

</script>