import '@/assets/css/main.css'
import '@/assets/css/sidebar.css'
import '@/assets/css/header.css'

import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
