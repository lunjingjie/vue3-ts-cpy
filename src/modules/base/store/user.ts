import { defineStore } from 'pinia';
import { ref } from 'vue';
import { storage } from '/@/core/utils';

interface User {
  id: number;
  name: string,
  username: string,
  nickname: string,
  phone: string,
  headImg: string,
  email: string,
  status: 0 | 1;
  departmentId: string;
  createTime: Date;
  [key: string]: any;
}

// 获取本地缓存所有数据
const data = storage.info();

export const useUserStore = defineStore('user', () => {

  const info = ref<User | null>(data.userInfo);

  // 设置用户信息
	function set(value: any) {
		info.value = value;
		storage.set("userInfo", value);
	}

  return {
    info,
    set,
  };
});