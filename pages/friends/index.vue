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
    <div class="container mx-auto grid sm:px-0 px-4 md:grid-cols-3 pt-6 gap-4 sm:grid-cols-2">
      <FriendCard
        v-for="friend in friends"
        :key="friend.name"
        :href="friend.href" 
        :logo="friend.logo"
        :name="friend.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import friendsData from '~/assets/friends.json'


interface Friend {
  href: string,
  logo: string,
  name: string,
  intro: string
}

@Component
export default class FriendsPage extends Vue {
  private friends = friendsData
}
</script>