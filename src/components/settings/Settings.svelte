<script>
  import { clickOutside } from "../../utils/clickOutside";
  import SettingsHeader from "./SettingsHeader.svelte";
  import SettingsContent from "./SettingsContent.svelte";
  import CountdownControllers from "./CountdownControllers.svelte";
  import TaskForm from "./TaskForm.svelte";
  import TaskList from "./TaskList.svelte";

  export let show = false;

  function handleClickOutside(event) {
    show = false;
  }
</script>

<aside
  id="menu-settings"
  class:show
  use:clickOutside
  on:click_outside={handleClickOutside}
>
  <SettingsHeader
    onClose={() => {
      show = !show;
    }}
  />

  <SettingsContent>
    <CountdownControllers />
    <div class="session">
      <h3>Session Task</h3>
      <TaskForm />
      <hr />
      <TaskList />
    </div>
  </SettingsContent>
</aside>

<style>
  aside {
    transform: translateX(240px);
    transition: 0.3s ease-in-out;
    position: absolute;
    right: 0;
    top: 0;

    width: 240px;
    height: 100vh;
    background: var(--red-600);

    padding: 1.25rem;

    overflow: hidden;
    overflow-y: scroll;
  }

  aside::-webkit-scrollbar {
    width: 10px;
  }

  aside::-webkit-scrollbar-track {
    background: transparent;
  }

  aside::-webkit-scrollbar-thumb {
    background-color: var(--yellow-100);
    border-radius: 20px;
  }

  .session {
    margin-top: 3rem;
    max-width: calc(240px - (1.25rem * 2));
  }

  .session h3 {
    margin-bottom: 1rem;
  }

  .show {
    transform: translateX(0);
  }

  .session hr {
    margin: 1rem 0;
    border: 1px solid var(--red-100);
  }
</style>
