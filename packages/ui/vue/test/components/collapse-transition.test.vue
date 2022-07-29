<script lang="ts">
import CollapseTransition from '@shared/vue/components/collapse-transition/collapse-transition.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    CollapseTransition
  },
  setup() {
    return {
      show: ref(false)
    }
  }
})
</script>

<template>
  <div data-testid="container">
    <button @click="show = !show">Toggle</button>
    <collapse-transition v-if="show">
      <div>
        <p>Hello</p>
      </div>
    </collapse-transition>
  </div>
</template>
