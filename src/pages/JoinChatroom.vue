<template>
  <div>
    <h1 class="text-4xl font-medium text-center mb-12">
      Join Chatroom
    </h1>
    
    <form @submit.prevent="onSubmitForm">
      <div class="mb-7 space-y-4">
        <text-input
          v-model="username"
          placeholder="Username"
        />
        <text-input
          v-model="roomId"
          placeholder="RoomID"
        />
      </div>
      
      <primary-button 
        type="submit"
        class="w-full rounded-full"
      >
        JOIN
      </primary-button>
    </form>
  </div>
</template>

<script setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import TextInput from '@/components/inputs/TextInput.vue';
import { ref } from 'vue';

// Forms
const username  = ref('');
const roomId    = ref('');

const onSubmitForm = () => {
  console.log("SUBMITTED", {
    username: username.value,
    roomId: roomId.value
  })
}

</script>

<style scoped>

</style>