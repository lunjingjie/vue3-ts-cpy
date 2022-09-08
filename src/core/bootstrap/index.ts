import { App } from 'vue';
import ElementPlus from 'element-plus';
import { router } from '../router';
import { createPinia } from 'pinia';

export async function bootstrap(app: App) {
  // add element
	app.use(ElementPlus);

  app.use(router);

  app.use(createPinia());
}
