import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import { MotionPlugin } from '@vueuse/motion';
import './style.css';

// Import the translations from home.json
import homeMessages from './locales/home.json';

// Create an i18n instance
const i18n = createI18n({
  locale: 'en', // Set the default locale
  messages: homeMessages,
});

// Create and mount the Vue app
const app = createApp(App);

app.use(i18n);
app.use(MotionPlugin);
app.mount('#app');
