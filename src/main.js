import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/modal'

import './assets/main.css'

const app = createApp(App)
app.use(VueSweetalert2);
app.use(router);
app.mount('#app');