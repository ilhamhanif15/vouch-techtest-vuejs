import { createRouter, createWebHistory } from "vue-router";
import { useRoom } from "@/lib/store/room";
import BaseLayout from "@/layouts/BaseLayout.vue";

const JoinChatroom  = () => import("@/pages/JoinChatroom.vue");
const ChatRoom      = () => import("@/pages/ChatRoom.vue");

const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: "join-room",
        name: "JoinChatroom",
        component: JoinChatroom,
        meta: {
            title: "Join Chatroom",
            layout: BaseLayout,
            auth: false
        },
      },
      {
        path: "rooms/:roomId",
        name: "ChatRoom",
        component: ChatRoom,
        meta: {
            title: "Chat Room",
            layout: BaseLayout,
            auth: true
        },
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route guard
router.beforeEach(async (to, from, next) => {
  const roomStore       = useRoom();
  const isAuthenticated = roomStore.username && roomStore.roomId;

  if (to.matched.some((res) => res.meta.auth) && !isAuthenticated) {
    next({ name: "JoinChatroom" });
    return;
  }
  else if (to.name === 'JoinChatroom' && isAuthenticated) {
    next({
      name: 'ChatRoom',
      params: {
        roomId: roomStore.roomId
      }
    })
    return;
  }

  next();
});

export default router;