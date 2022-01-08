<script>
  import { fly } from "svelte/transition";

  export let title;
  export let onDelete;
</script>

<li transition:fly={{ x: 200, duration: 500 }}>
  <span>{title}</span>
  <button class="remove-task" type="button" on:click={onDelete}>X</button>
</li>

<style>
  li {
    background: var(--green-400);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;

    font-size: 14px;
    line-height: 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span {
    display: inline-block;
  }
  button {
    line-height: 12px;
    font-size: 12px;

    background: none;
    border: none;
    color: var(--yellow-100);
    cursor: pointer;
  }
</style>
