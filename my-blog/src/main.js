import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// global styles
import './assets/main.css'

//import store 
import store from './store/index.js'
createApp(App).use(router).use(store).mount('#app')
