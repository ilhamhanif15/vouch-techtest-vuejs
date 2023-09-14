<template>
  <div>
    <div 
      v-show="senderName !== null" 
      class="flex items-center space-x-2 mb-1"
      :class="{
        'justify-start': !isMe,
        'justify-end': isMe,
      }"
    >
      <div 
        class="w-8 h-8 bg-secondary-light border-secondary-darker border-2 rounded-full flex justify-center items-center font-medium"
      >
        {{ senderName?.[0] }}
      </div>
      <div class="font-medium ">
        {{ senderName }}
      </div>
    </div>

    <div 
      class="flex w-full relative"
      :class="{
        'flex-row-reverse': isMe
      }"
    >
      <div 
        class="max-w-[75%] py-2 px-4 border-2 rounded-lg"
        :class="{
          'bg-secondary-light border-secondary-darker rounded-bl-none': !isMe,
          'bg-primary-light border-green-700 rounded-br-none text-white': isMe,
        }"
      >
        <slot />
      </div>
      <div 
        class="absolute -bottom-[0.8rem] w-6 h-6"
        :class="{
          'bg-secondary-light border-l-2 left-0 border-secondary-darker': !isMe,
          'bg-primary-light border-r-2 right-0 border-green-700': isMe,
        }"
        :style="{clipPath: clipPathPolygon}"
      />
      <div 
        class="absolute -bottom-[15px] h-5 w-[2px]"
        :class="{
          'left-[7px] rotate-[51deg] rounded-bl-full bg-secondary-darker': !isMe,
          'right-[7px] -rotate-[51deg] rounded-br-full bg-green-700': isMe,
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  isMe: { type: Boolean, required: false, default: false},
  senderName: { type: String, required: false, default: null},
})

const clipPathPolygon = computed(() => props.isMe ? 'polygon(0 0, 100% 100%, 100% 0%)' : 'polygon(0 0, 0% 100%, 100% 0%)');

</script>

<style scoped>

</style>