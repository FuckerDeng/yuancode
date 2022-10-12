import { createApp } from 'vue'

import App from './App.vue'
//路由
import router from "./router/index"
//样式初始化
import "./assets/css/reset.css"
//element_plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
