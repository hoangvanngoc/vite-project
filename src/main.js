import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import { Button, message, Drawer, List, Menu, Card, Table, Avatar, Select, Input, InputPassword } from 'ant-design-vue';
import axios from "axios"
window.axios = axios

import 'ant-design-vue/dist/reset.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(Button)
app.use(Input)
app.use(InputPassword)
app.use(Select)
app.use(Card)
app.use(Table)
app.use(Avatar)
app.use(Drawer)
app.use(List)
app.use(Menu)
app.mount('#app')

app.config.globalProperties.$message = message;
