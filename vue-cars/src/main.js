import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router';
import Single from './components/Single.vue';
import HomeView from './views/HomeView.vue';
import Registration from './components/Registration.vue';

const routes = [
    { path: '/', component: HomeView},
    { path: '/single', component: Single},
    { path: '/registration', component: Registration}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');
// createApp(App).mount('#app')

