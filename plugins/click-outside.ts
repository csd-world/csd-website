import Vue from 'vue'

Vue.directive('click-outside', {
  bind: function(el: HTMLElement & { clickOutsideEvent?: EventListener }, binding, vnode) {
    el.clickOutsideEvent = function(event: Event) {
      if (!(el === event.target || el.contains(event.target as Node))) {
        if (vnode.context && binding.expression) {
          (vnode.context as any)[binding.expression](event)
        }
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function(el: HTMLElement & { clickOutsideEvent?: EventListener }) {
    if (el.clickOutsideEvent) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    }
  }
})