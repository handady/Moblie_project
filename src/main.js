import { createApp } from 'vue'
import App from './App.vue'
import "amfe-flexible"
import { Button,Icon,Tab,Tabs } from 'vant'
import router from './router'
import './commom/css/commom.less'


const app = createApp(App).use(router)

app.use(Button)
app.use(Icon)
app.use(Tab);
app.use(Tabs);

app.mount('#app')
