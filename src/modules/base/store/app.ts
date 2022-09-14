import { defineStore } from "pinia";
import { reactive, ref } from 'vue';
import { config } from "/@/core";
import { deepMerge, getBrowser, isUndef, storage } from "/@/core/utils";

export const useAppStore = defineStore('app', () => {
  // 基本信息
  const info = ref<any>({ ...config.app });

  // 浏览器信息
  const browser = ref<any>(getBrowser());

  // 是否折叠
  const isFold = ref(browser.value.isMini || false);

  // 事件
  const events = reactive<{ [key: string]: any }>({
    hasToken: [],
  });

  function fold(v?: boolean) {
    if (isUndef(v)) {
      v = !isFold.value;
    }

    isFold.value = v;
  }

  function set(data: any) {
    deepMerge(info.value, data);
    storage.set('__app__', info.value);
  }

  function setBrowser() {
    browser.value = getBrowser();
  }

  function addEvent(name: string, func: any) {
    if (func) {
      events[name].push(func);
    }
  }

  return {
    info,
    browser,
    isFold,
    fold,
    events,
    set,
    setBrowser,
    addEvent,
  };
});