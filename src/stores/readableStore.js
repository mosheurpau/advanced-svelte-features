import { readable } from "svelte/store";

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 3000);

  //   The start function returns another function named stop.
  // This stop function is called by Svelte when it needs to clean up the store.
  return function stop() {
    clearInterval(interval);
  };
});
