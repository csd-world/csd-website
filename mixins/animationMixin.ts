import lottie, { AnimationItem } from "lottie-web";
import Vue from "vue";
import { rn } from "~/type";
import bus from "~/utils/bus";

function animationMixin(animationImport: () => Promise<any>, index: number) {
  let animation: AnimationItem | null = null;
  let loaded = false;
  return Vue.extend({
    data() {
      return {
        index
      };
    },
    methods: {
      async play() {
        if (!animation) {
          await this.loadAnimation();
          animation!.play();
        } else {
          animation!.play();
        }
      },
      async stop() {
        if (!animation) {
          await this.loadAnimation();
        } else {
          animation!.stop();
        }
      },
      loadAnimation() {
        if (!animation && !loaded) {
          loaded = true;
          return animationImport().then(data => {
            animation = lottie.loadAnimation({
              container: this.$refs.animationContainer as HTMLElement,
              animationData: data,
              renderer: "svg",
              autoplay: false
            });
          });
        }
        return;
      }
    },
    mounted() {
      if (!this.$refs.animationContainer) {
        throw new Error("animationContainer ref is not found");
      }
      bus.$on(
        "onLeave",
        ({ origin, destination }: { origin: rn; destination: rn }) => {
          if (!destination) return;
          if (destination.index === this.index) this.play();
        }
      );
      bus.$on(
        "afterLoad",
        ({ origin, destination }: { origin: rn; destination: rn }) => {
          if (!origin) return;
          if (destination.index === this.index) {
            animation?.isLoaded ? null : this.play(); 
          }
          if (origin.index === this.index) {
            this.stop();
          }
        }
      );
    },
  });
}

export default animationMixin;
