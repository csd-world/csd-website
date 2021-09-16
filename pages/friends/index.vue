<template>
  <div class="bg-gray-200 min-h-screen">
    <div class="flex flex-col bg-primary">
      <Navigation />
      <div class="container mx-auto flex items-center sm:pb-4 pb-6">
        <div class="sm:w-2/3 w-full sm:px-0 px-4">
          <h1 class="mb-4">我们的朋友们</h1>
          <p>软件部的发展离不开这些朋友们的支持与鼓励~</p>
        </div>
        <img class="sm:w-1/3 sm:block w-0 hidden" src="~/assets/svg/friends.svg" alt="">
      </div>
    </div>
    <div class="container mx-auto grid sm:px-0 px-4 sm:grid-cols-3 pt-6 gap-4">
      <FriendCard
        v-for="friend in friends"
        :key="friend.name"
        :href="friend.href" 
        :logo="friend.logo"
        :name="friend.name"
        :intro="friend.intro"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

interface Friend {
  href: string,
  logo: string,
  name: string,
  intro: string
}

@Component
export default class FriendsPage extends Vue {
  private friends: Friend[] = [{
    href: 'https://csd.guet.ltd/',
    logo: 'csd.png',
    name: '校基地软件部',
    intro: '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。'
  }, {
    href: 'https://csd.guet.ltd/',
    logo: 'csd.png',
    name: '校基地软件部',
    intro: '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。'
  }, {
    href: 'https://csd.guet.ltd/',
    logo: 'csd.png',
    name: '校基地软件部',
    intro: '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。'
  }, {
    href: 'https://csd.guet.ltd/',
    logo: 'csd.png',
    name: '校基地软件部',
    intro: '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。'
  }]
}
</script>