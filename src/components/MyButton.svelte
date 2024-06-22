<script>
  import { createEventDispatcher } from "svelte";

  export let text = "Click me";

  //   Update the Button.svelte file to dispatch a click event.
  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch("myEvent");
  }
</script>

<!-- Creating a Button Component  -->
<button on:click={handleClick}>{text}</button>

<style>
  button {
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
  }
</style>
