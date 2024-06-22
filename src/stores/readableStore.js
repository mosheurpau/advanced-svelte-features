import { readable } from "svelte/store";

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 5000);
  return function stop() {
    clearInterval(interval);
  };
});
