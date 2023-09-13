import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "@/layouts/BaseLayout.vue";

const JoinChatroom = () => import("@/pages/JoinChatroom.vue");

const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: "join-room",
        name: "Join Chatroom",
        component: JoinChatroom,
        meta: {
            title: "Join Chatroom",
            layout: BaseLayout
        },
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;