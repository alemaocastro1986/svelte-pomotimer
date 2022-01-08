<script>
  export let imageSrc;
  export let imageAlt;
  export let onClick;
</script>

<button type="button">
  <img src={imageSrc} alt={imageAlt} on:click={onClick} />
</button>

<style>
  button {
    background: none;
    border: none;
    height: 44px;
    width: 44px;
    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.8);
  }

  img {
    width: 32px;
    height: 32px;
    filter: invert(1);
  }
</style>
