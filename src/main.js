import { createApp } from 'vue'
import App from './App.vue'
import "amfe-flexible"
import { Button,Icon,Tab,Tabs,TreeSelect,Stepper,ActionBar,ActionBarIcon,ActionBarButton,Checkbox,CheckboxGroup,
    SubmitBar,ContactCard,Card,Dialog,AddressList,AddressEdit,Field,CellGroup,Form} from 'vant'
import router from './router'
import './commom/css/commom.less'
import store from './store'


const app = createApp(App).use(store).use(router)

app.use(Button)
app.use(Icon)
app.use(Tab);
app.use(Tabs);
app.use(TreeSelect);
app.use(Stepper);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(SubmitBar);
app.use(ContactCard);
app.use(Card);
app.use(Dialog);
app.use(AddressList);
app.use(AddressEdit);
app.use(Field);
app.use(CellGroup);
app.use(Form);

app.mount('#app')
