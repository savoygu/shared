<script lang="ts">
import { addClass, removeClass } from '@savoygu/shared-utils'
import { computed, defineComponent } from 'vue'

type RendererElement = {
  [key: string]: any
}

export default defineComponent({
  name: 'CollapseTransition',
  props: {
    transitionClass: {
      type: String,
      default: 'sh-collapse-transition'
    }
  },
  setup(props) {
    const className = computed(() => props.transitionClass)

    const on = {
      beforeEnter(el: RendererElement) {
        addClass(el as HTMLElement, className.value)
        if (!el.dataset) el.dataset = {}

        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom

        el.style.height = '0'
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      },
      enter(el: RendererElement) {
        el.dataset.oldOverflow = el.style.overflow
        if (el.scrollHeight !== 0) {
          el.style.height = el.scrollHeight + 'px'
          el.style.paddingTop = el.dataset.oldPaddingTop
          el.style.paddingBottom = el.dataset.oldPaddingBottom
        } else {
          el.style.height = ''
          el.style.paddingTop = el.dataset.oldPaddingTop
          el.style.paddingBottom = el.dataset.oldPaddingBottom
        }

        el.style.overflow = 'hidden'
      },
      afterEnter(el: RendererElement) {
        // for safari: remove class then reset height is necessary
        removeClass(el as HTMLElement, className.value)
        el.style.height = ''
        el.style.overflow = el.dataset.oldOverflow
      },
      beforeLeave(el: RendererElement) {
        if (!el.dataset) el.dataset = {}
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
        el.dataset.oldOverflow = el.style.overflow

        el.style.height = el.scrollHeight + 'px'
        el.style.overflow = 'hidden'
      },
      leave(el: RendererElement) {
        if (el.scrollHeight !== 0) {
          // for safari: add class after set height, or it will jump to zero height suddenly, weired
          addClass(el as HTMLElement, className.value)
          el.style.height = 0
          el.style.paddingTop = 0
          el.style.paddingBottom = 0
        }
      },
      afterLeave(el: RendererElement) {
        removeClass(el as HTMLElement, className.value)
        el.style.height = ''
        el.style.overflow = el.dataset.oldOverflow
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      }
    }
    return {
      on
    }
  }
})
</script>

<template>
  <transition v-on="on">
    <slot></slot>
  </transition>
</template>
