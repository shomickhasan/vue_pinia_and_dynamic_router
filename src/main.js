import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import {createPinia} from "pinia"
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
