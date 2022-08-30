import { defineConfig } from 'vite';
import { proxy } from './src/core/config/proxy';
import vue from '@vitejs/plugin-vue';
import path from 'path';

function resolve(dir: string) {
	return path.resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'/@': resolve('src'),
			'/#': resolve('types'),
			'/$': resolve('src/modules')
		}
	},
	server: {
		port: 9000,
		proxy,
		hmr: {
			overlay: true
		}
	}
});
