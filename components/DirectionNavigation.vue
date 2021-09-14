<template>
  <Navigation
    :color="navColor"
    :currentClasses="'bg-black bg-opacity-30 hover:bg-opacity-40 sm:bg-primary sm:bg-opacity-100'" 
    :hoverClasses="'hover:bg-black hover:bg-opacity-40` sm:hover:bg-primary sm:hover:bg-opacity-80'" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class DirectionNavigation extends Vue {
  @Prop({ required: false, default: 'white' }) private navColor!: string
}
</script>