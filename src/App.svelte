<script>
  import Button from "./components/MyButton.svelte";
  import { countStore } from "./stores/writableStore.js";
  import { time } from "./stores/readableStore";
  let countsNumer = 0;

  // Writable Store
  function increment() {
    countStore.update((n) => n + 2);
  }
</script>

<h2>Creating Reusable Components</h2>
<p>{countsNumer}</p>
<!-- Ensure the parent component properly listens for the myEvent and updates the count state. -->
<Button on:myEvent={() => countsNumer++} text="Increment Button" />
<Button on:myEvent={() => countsNumer--} text="Decrement Button" />
<Button text="Test" />

<br /> <br /> <br />

<h2>------ Stores for State Management ------</h2>
<h3>1. Writable Store</h3>
<button on:click={increment}>Increment 2 count Store: {$countStore}</button>
<button on:click={() => countStore.update((c) => c + 1)}
  >Increment 1 count Store: {$countStore}</button
>

<br /><br /> <br />

<h3>2. Readable Store</h3>
<p>Current time: {$time}</p>
<p>Current time: {$time.toLocaleTimeString()}</p>
