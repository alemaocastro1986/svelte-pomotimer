<script>
  import { workDuration } from "../stores/pomodoro.store";
  export let timer = new Date(0, 0, 0, 0, $workDuration, 0);
  export let audio;
  export let isBreak = false;

  const formatter = new Intl.DateTimeFormat("en", {
    minute: "2-digit",
    second: "2-digit",
  });

  $: formatedTimer = formatter.format(timer);
</script>

<div class="timer-container centered {isBreak && 'break'}">
  <div class="timer-info centered {isBreak && 'break'}">
    <time>{formatedTimer}</time>
  </div>
  <audio bind:this={audio} src="media/alarme.mp3">
    O seu navegador não suporta o elemento <code>audio</code>.
  </audio>
</div>

<style>
  .centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .timer-container {
    width: 240px;
    height: 240px;
    border: 3px solid var(--red-50);
    border-radius: 100%;
    padding: 0.5rem;
  }

  .timer-info {
    width: 100%;
    height: 100%;
    border: 2px solid var(--red-200);
    border-radius: 100%;
  }

  .break {
    border-color: var(--green-300);
    color: var(--green-300);
  }

  time {
    font-size: 4rem;
  }
</style>
