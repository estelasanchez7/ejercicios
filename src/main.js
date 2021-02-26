import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

import es from '@/locales/es.json'
import en from '@/locales/en.json' 

import i18next from 'i18next';

i18next.init({
  lng: 'es',
  debug: true, 
  resources: {
    en: {translation: en},
    es: {translation: es}
  }
});
