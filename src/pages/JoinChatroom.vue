<template>
  <div>
    <h1 class="text-4xl font-medium text-center mb-12">
      Join Chatroom
    </h1>
    
    <form @submit.prevent="onSubmitForm">
      <div class="mb-24 space-y-4">
        <text-input
          v-model="joinRoomForm.username.modelValue"
          :error-message="joinRoomForm.username.errorMsg"
          placeholder="Username"
          class="rounded-lg w-full"
        />
        <text-input
          v-model="joinRoomForm.roomId.modelValue"
          :error-message="joinRoomForm.roomId.errorMsg"
          placeholder="RoomID"
          class="rounded-lg w-full"
        />
      </div>
      
      <primary-button 
        type="submit"
        class="w-full rounded-full"
      >
        <div 
          v-show="isLoading" 
          class="flex justify-center items-center space-x-1"
        >
          <div class="w-8 h-8 bg-transparent border-2 border-l-0 border-b-0 border-white rounded-full animate-spin" />
        </div>
        <div v-show="!isLoading">
          JOIN
        </div>
      </primary-button>
    </form>
  </div>
</template>

<script setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import TextInput from '@/components/inputs/TextInput.vue';
import ChatRoomService from '@/services/ChatRoom';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRoom } from '@/lib/store/room';

const joinRoomForm = reactive({
  username: {
    modelValue: '',
    errorMsg: ''
  },
  roomId: {
    modelValue: '',
    errorMsg: ''
  },
});

const router    = useRouter();
const roomStore = useRoom();
const isLoading = ref(false);

const mapErrorFromError = (errors) => {
  Object.keys(errors).forEach(errKeyName => {
    joinRoomForm[errKeyName].errorMsg = errors[errKeyName];
  });
}

const resetErrorMsg = (formObj) => {
  Object.keys(formObj).forEach(name => {
    joinRoomForm[name].errorMsg = '';
  })
}

const onSubmitForm = async () => {
  try {
    resetErrorMsg(joinRoomForm);
    isLoading.value = true;
    let { data } = await ChatRoomService.joinRoom.post(joinRoomForm.username.modelValue, joinRoomForm.roomId.modelValue);
    
    roomStore.setUserInRoom(joinRoomForm.username.modelValue, joinRoomForm.roomId.modelValue);
  
    router.push({
      name: 'ChatRoom',
      params: {
        roomId: data.data._id
      }
    })
  } 
  catch (error) {
    if (error?.response?.data?.errors) {
      mapErrorFromError(error.response.data.errors)
    }
  } 
  finally {
    isLoading.value = false;
  }
}

</script>

<style scoped>

</style>