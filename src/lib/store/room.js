import { defineStore } from "pinia";
import chatRoomService from "@/services/ChatRoom";

export const useRoom = defineStore('room-store', {
  
  state: () => {
    return {
      username: null,
      roomId: null,
      messages: []
    }
  },

  actions: {
    setUserInRoom(username, roomId) {
      this.username = username;
      this.roomId   = roomId;
      this.setToLocalStorage();
    },

    setToLocalStorage() {
      localStorage.setItem('username', this.username);
      localStorage.setItem('roomId', this.roomId);
    },

    setFromLocalStorage() {
      this.username = localStorage.getItem('username') || null;
      this.roomId   = localStorage.getItem('roomId') || null;
    },

    async fetchRoomDetail() {
      if (this.username && this.roomId) {
        try {
          const { data }  = await chatRoomService.roomDetail.get(this.roomId, this.username);
          this.messages   = data.data.messages;
        } catch (error) {
          return false;
        }
      }

      return true;
    },

    unsetFromLocalStorage() {
      localStorage.removeItem('username');
      localStorage.removeItem('roomId');

      this.username = null;
      this.roomId   = null;
    }
  }

});