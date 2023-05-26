import '@scss/index.scss';


import { createApp } from 'vue';

import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import App from './App.vue';

// console.log(process.env);

// Vue.config.productionTip = false;//vue的提示，在生产环境下需要设置为false

import router from '@router/index.ts';
import store from '@store/index.ts';

let app = createApp(App);

app.use(ElementPlus);

app.use(router).use(store).mount('#app');


