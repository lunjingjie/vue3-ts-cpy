import { Router as VueRouter, RouteRecordRaw } from 'vue-router';

export declare interface Router extends VueRouter {
	href(path: string): void;
	find(path: string): RouteRecordRaw | undefined;
	append(data: any[] | any): void;
	[key: string]: any;
}
