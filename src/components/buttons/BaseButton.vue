<template>
  <button
    :class="{
      'rounded': isRounded,
      [paddingClass]: true
    }"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  padding: { type: String, default: 'common'},
  isRounded: { type: Boolean, default: true },
})

const paddingOptions = {
  common: 'py-2 px-4'
};
const paddingClass = computed(() => paddingOptions[props.padding]);

</script>

<style scoped>

</style>