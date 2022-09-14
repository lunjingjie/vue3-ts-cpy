import { App } from 'vue';
import ElementPlus from 'element-plus';
import "element-plus/theme-chalk/src/index.scss";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createModule } from './modules';
import { router } from '../router';
import { createPinia } from 'pinia';
import { Loading } from "../utils";

export async function bootstrap(app: App) {
  // add element
	app.use(ElementPlus);

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }

  app.use(router);

  app.use(createPinia());

  const { eventLoop } = createModule(app);

  // 加载
	Loading.set([eventLoop()]);
}
