import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import CreateItem from './components/CreateItem.vue';
import DisplayItem from './components/DisplayItem.vue';
import EditItem from './components/EditItem.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',

    routes: [
      {
        name: 'CreateItem',
        path: '/create/item',
        component: CreateItem
      },
      {
        name: 'DisplayItem',
        path: '/',
        component: DisplayItem
      },
      {
        name: 'EditItem',
        path: '/edit/:id',
            component: EditItem
      }
    ]
 });
new Vue(Vue.util.extend({router},App)).$mount('#app');
