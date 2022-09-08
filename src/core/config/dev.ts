import { getUrlParam, storage } from '../utils';
import { proxy } from './proxy';

export default {
	host: proxy['/dev'].target,

	get baseUrl() {
		let proxy = getUrlParam('proxy');
		if (proxy) {
			storage.set('proxy', proxy);
		} else {
			proxy = storage.get('proxy') || 'dev';
		}
		return `/${proxy}`;
	}
};
