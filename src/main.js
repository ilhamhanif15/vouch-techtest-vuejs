import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/lib/router'
import { useRoom } from './lib/store/room'

const app   = createApp(App)
const pinia = createPinia()

app.use(pinia)

const roomStore = useRoom();
roomStore.setFromLocalStorage();

app.use(router)

app.mount('#app')
