import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Game from './components/Game.vue';
import MomentPrivacyPolicy from './components/MomentPrivacyPolicy.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/game', component: Game },
  { path: '/moment-privacy-policy', component: MomentPrivacyPolicy },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
