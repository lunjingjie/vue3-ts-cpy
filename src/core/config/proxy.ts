export const proxy = {
	'/dev': {
		target: 'http://localhost:8001',
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, '')
	},
	'/prod': {
		target: 'https://show.cool-admin.com',
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, '/api')
	}
};
