import { watch } from '@vue/runtime-dom';
import { RouteLocationNormalizedLoaded, useRouter } from 'vue-router';

export type TitleGenerator = (route: RouteLocationNormalizedLoaded) => string;

export function useTitle(generator: TitleGenerator) {
  const router = useRouter();

  watch(router.currentRoute, route => {
    window.document.title = generator(route);
  });
}
