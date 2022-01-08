<script>
  import { workDuration, breakDuration } from "./stores/pomodoro.store";
  import IconButton from "./components/IconButton.svelte";
  import Countdown from "./components/Countdown.svelte";
  import SessionInfo from "./components/SessionInfo.svelte";
  import Settings from "./components/settings/Settings.svelte";
  import { minutesToMilleseconds } from "./utils/minutesToMilleseconds";
  import { millisecondsToTime } from "./utils/millesecondsToTime";

  let showSettings = false;
  let countdown;
  let currentTime;
  let time;
  let isPlaying = false;
  let isBreak = false;
  let audio;

  workDuration.subscribe((value) => {
    currentTime = minutesToMilleseconds(value);
    time = millisecondsToTime(currentTime);
  });

  function isEndTimer(milliseconds) {
    return milliseconds / 1000 === 0;
  }

  function play() {
    if (!isPlaying) {
      isPlaying = true;
      countdown = setInterval(() => {
        currentTime -= 1000;
        time = millisecondsToTime(currentTime);

        if (isEndTimer(currentTime) && !isBreak) {
          currentTime = minutesToMilleseconds($breakDuration);
          isBreak = true;
          audio.play();
        }

        if (isEndTimer(currentTime) && isBreak) {
          clearInterval(countdown);
          isBreak = false;
          currentTime = minutesToMilleseconds($workDuration);
        }
      }, 1000);
    } else {
      isPlaying = false;
      clearInterval(countdown);
    }
  }

  function reset() {
    clearInterval(countdown);
    isBreak = false;
    isPlaying = false;
    currentTime = minutesToMilleseconds($workDuration);
    time = millisecondsToTime(currentTime);
  }
</script>

<main>
  <div class="container">
    <h1>Pomotimer</h1>
    <Countdown timer={time} {isBreak} bind:audio />
    <SessionInfo />
    <div class="actions">
      <IconButton
        imageSrc="img/reset.png"
        imageAlt="reset icon"
        onClick={reset}
      />
      <IconButton
        imageSrc={!isPlaying ? "img/play.png" : "img/pause.png"}
        imageAlt="play icon"
        onClick={play}
      />
      <IconButton
        imageSrc="img/settings.png"
        imageAlt="settings icon"
        onClick={() => {
          showSettings = true;
        }}
      />
    </div>
    <Settings bind:show={showSettings} />
  </div>
</main>

<style>
  :root {
    --white: #ffffff;
    --yellow-100: rgb(243, 209, 98);

    --green-300: rgb(142, 218, 142);
    --green-400: rgb(83, 156, 83);

    --red-50: rgb(250, 179, 167);
    --red-100: rgb(236, 157, 143);
    --red-200: rgb(252, 151, 133);
    --red-500: tomato;
    --red-600: rgb(223, 86, 61);
  }
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html, body) {
    font-family: sans-serif;
    height: 100vh !important;
    width: 100%;
    background: #131416;
  }

  .container {
    position: relative;
    overflow-x: hidden;

    max-width: 320px;
    margin: 0 auto;
    height: 100vh;
    background: var(--red-500);
    color: var(--white);
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin: 1.5rem 0;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 40px;
    margin-top: 2rem;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
