import network from "@/network";

const chatRoomService = {
  joinRoom: {
    async post(username, roomId) {
      return await network.post('/room/join', {username, roomId});
    }
  },
  roomDetail: {
    async get(roomId, username) {
      return await network.get(`/room`, {username, roomId});
    }
  }
}

export default chatRoomService;