import { createApp } from 'vue';
import App from './App.vue';
import { bootstrap } from './core/bootstrap';

const app = createApp(App);

bootstrap(app).then(() => {
  app.mount('#app');
}).catch((err) => {
  console.error("COOL-ADMIN 启动失败", err);
});