import lottie, { AnimationItem } from "lottie-web";
import Vue from "vue";
import { rn } from "~/type";
import bus from "~/utils/bus";

function animationMixin(animationImport: () => Promise<any>, index: number) {
  let lazyAnimation: AsyncLazy<AnimationItem> | null = null;
  return Vue.extend({
    data() {
      return {
        index
      };
    },
    methods: {
      async play() {
        (await lazyAnimation!.get()).play();
      },
      async stop() {
        lazyAnimation!.value?.stop();
      }
    },
    mounted() {
      if (!this.$refs.animationContainer) {
        throw new Error("animationContainer ref is not found");
      }

      lazyAnimation = new AsyncLazy(() =>
        animationImport()
          .then(data => {
            (this.$refs.animationContainer! as HTMLElement).innerHTML = ''
            return lottie.loadAnimation({
              container: this.$refs.animationContainer as HTMLElement,
              animationData: data,
              renderer: "svg",
              autoplay: false
            });
          })
          .catch(() => {
            throw new Error("Failed to load animation");
          })
      );

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
            this.play();
          }
          if (origin.index === this.index) {
            this.stop();
          }
        }
      );
    }
  });
}

class AsyncLazy<T> {
  private promise: Promise<T> | undefined = undefined;
  private _value: T | undefined = undefined;
  get value() {
    return this._value;
  }
  get loaded() {
    return this._value !== undefined;
  }
  constructor(readonly fn: () => Promise<T>) {}
  public get() {
    if (!this.promise)
      this.promise = (async () => {
        this._value = await this.fn();
        return this._value!;
      })();
    return this.promise;
  }
}

export default animationMixin;
