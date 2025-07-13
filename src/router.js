import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Game from './components/Game.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/game', component: Game },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
