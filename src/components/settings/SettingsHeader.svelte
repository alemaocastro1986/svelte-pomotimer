<script>
  export let onClose;
</script>

<header>
  <h3>Pomotimer</h3>

  <button id="close-settings" type="button" on:click={onClose}>X</button>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    color: var(--green-300);
  }

  button {
    border: 0;
    background: inherit;
    color: var(--white);
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    font-weight: bold;
    transform: scale(1.5);
  }
</style>
