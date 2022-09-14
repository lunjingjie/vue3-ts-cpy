import { useAppStore } from './app';
import { useUserStore } from './user';

export function useStore() {
  const app = useAppStore();
  const user = useUserStore();

  return {
    app,
    user,
  };
}