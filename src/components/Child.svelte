<script>
  import { getContext } from "svelte";

  //   Consuming Context
  const users = getContext("userData");
</script>

{#each users as user}
  <p>User Data: {user.name}, Age: {user.age}</p>
{/each}
