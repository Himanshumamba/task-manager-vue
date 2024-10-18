import { createApp } from 'vue';
import App from './App.vue';
import router from './router/route'; // Make sure this path is correct
import store from './store/store'; // Adjust the path to your Vuex store file

createApp(App)
  .use(store) // Add this line to use the Vuex store
  .use(router)
  .mount('#app');
