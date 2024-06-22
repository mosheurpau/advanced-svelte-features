<script>
  import Button from "./components/MyButton.svelte";

  let count = 0;
</script>

<h2>Creating Reusable Components</h2>
<p>{count}</p>
<!-- Ensure the parent component properly listens for the myEvent and updates the count state. -->
<Button on:myEvent={() => count++} text="Increment Button" />
<Button on:myEvent={() => count--} text="Decrement Button" />
<Button text="Test" />
<Button text="Using the Button Component" />
<Button text="Reusable Button" />
<Button />
