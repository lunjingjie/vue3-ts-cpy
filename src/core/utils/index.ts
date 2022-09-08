import storage from './storage';

// 获取地址栏参数
export function getUrlParam(name: string): string | null {
	const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	const r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURIComponent(r[2]);
	return null;
}

export { storage };
