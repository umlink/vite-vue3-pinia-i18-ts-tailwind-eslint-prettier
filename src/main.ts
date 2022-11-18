import { createApp } from 'vue'
import './style.css'
import ArcoVue, { Message } from '@arco-design/web-vue'
import { createPinia } from 'pinia'
import '@arco-design/web-vue/es/index.less'
import App from './App.vue'
import i18n from './i18n'

const app = createApp(App)
Message._context = app._context
const pinia = createPinia()

app.use(ArcoVue)
app.use(pinia)
app.use(i18n)

app.mount('#app')
