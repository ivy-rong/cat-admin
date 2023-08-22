import { createApp } from 'vue'
import './style.css'
import 'nprogress/nprogress.css'

import { createPinia } from 'pinia'

import router from './router/index'

import App from './App.vue'

const app = createApp(App)

// import i18n from '@/locales/i18n'

app.use(router)
app.use(createPinia())
// app.use(i18n)
app.mount('#app')
