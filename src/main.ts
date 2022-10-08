import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from '@/i18n/index'
import { createPinia } from 'pinia'
import { registerStore } from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './static/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(createPinia())
// 注册pinia状态管理库
registerStore()
app.use(ElementPlus, { i18n: i18n.global.t })
app.use(i18n)
app.mount('#app')
