<template>
  <div>
    <div class="fixed top-0 left-0 w-full bg-white z-10 px-6 md:px-24 lg:px-60 xl:px-96 pt-4 shadow-md">
      <div class="flex justify-between items-center space-x-2 mb-7">
        <button 
          type="button" 
          class="text-primary-light font-medium text-2xl focus:bg-none"
          @click="leaveRoom"
        >
          Exit
        </button>
        <h1 class="text-center font-bold text-4xl">
          {{ $route.params.roomId }}
        </h1>
        <div />
      </div>
    </div>

    <div class="space-y-8 pb-24 pt-24 scroll-smooth">
      <chat-bubble
        v-for="(item, idx) in messages"
        :key="idx"
        :is-me="item.senderUsername === roomStore.username"
        :sender-name="item.senderUsername"
      >
        {{ item.message }}
      </chat-bubble>
    </div>

    <form 
      class="fixed w-full py-5 px-6 md:px-24 lg:px-60 xl:px-96 bottom-0 left-0 right-0"
      @submit.prevent="sendMessage" 
    >
      <div class="relative">
        <text-input
          v-model="message"
          placeholder="Message here..."
          class="rounded-full w-full shadow-lg"
        />
        <div class="absolute right-3 bottom-2">
          <button 
            class="p-1 bg-primary-light rounded-full active:scale-125 duration-200"
          >
            <svg-icon 
              name="arrow-up" 
              class="w-8 h-8 text-white"
            />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import ChatBubble from '@/components/box/ChatBubble.vue';
import TextInput from '@/components/inputs/TextInput.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { onBeforeMount, reactive, ref } from 'vue';
import { io } from 'socket.io-client';
import { useRoute } from 'vue-router';
import { useRoom } from '@/lib/store/room';
import router from '@/lib/router';
import configSys from '@/_conf';

const route     = useRoute();
const roomStore = useRoom();

if (route.params.id !== roomStore.roomId) {
  router.push({
    name: 'JoinChatroom'
  })
}

const messages  = reactive([]);

onBeforeMount(async () => {
  const isSet = await roomStore.fetchRoomDetail();
  
  if (!isSet) {
    roomStore.unsetFromLocalStorage();
    router.push({
      name: 'JoinChatroom'
    })
  }
  
  messages.push(...roomStore.messages)

  setTimeout(() => {
    scrollToBottom();
  }, 500);
})

const socket = io(configSys.socketUrl);

socket.emit('subscribe', { roomId: roomStore.roomId });

socket.on('message', ({ message, senderUsername }) => {
  appendMessages({ message, senderUsername })
})

const message = ref('');

const sendMessage = () => {
  const data = {
    message: message.value,
    roomId: route.params.roomId,
    senderUsername: roomStore.username
  };

  socket.emit('chatmessage', data);
  message.value = '';
}

const appendMessages = ({ message, senderUsername }) => {
  messages.push({ message, senderUsername });
  scrollToBottom();
}

const leaveRoom = () => {
  socket.emit('unsubscribe', {
    username: roomStore.username,
    roomId: roomStore.roomId
  })

  roomStore.unsetFromLocalStorage();
  router.push({ name: 'JoinChatroom'});
}

const scrollToBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight + 500, behavior: 'smooth' })
}

</script>

<style scoped>

</style>