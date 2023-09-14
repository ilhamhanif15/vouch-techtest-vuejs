<template>
  <base-button
    class="bg-primary-light hover:bg-green-700 duration-200 text-white"
  >
    <slot />
  </base-button>
</template>

<script setup>
import BaseButton from './BaseButton.vue';

</script>

<style lang="scss" scoped>

</style>