import { Component, Vue } from "nuxt-property-decorator"
import { rn } from "~/type"
import bus from '~/utils/bus'

@Component
class EventMixin extends Vue {
  index = -1
  play(): void { }
  stop(): void { }
  mounted() {
    bus.$on('onLeave', ({ origin, destination }: { origin: rn, destination: rn }) => {
      if (!destination) return
      if (destination.index === this.index) this.play()
    })
    bus.$on('afterLoad', ({ origin, destination }: { origin: rn, destination: rn }) => {
      if (!origin) return
      if (origin.index === this.index) this.stop()
    })
  }
}

export default EventMixin