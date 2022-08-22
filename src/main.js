import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2'

import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
