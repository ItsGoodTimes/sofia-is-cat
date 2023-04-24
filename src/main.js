import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import './assets/main.css'

export const hostname = "lvm64116.sit.kmutt.ac.th:5000"
const app = createApp(App)

app.use(createPinia())

app.mount('#app')
