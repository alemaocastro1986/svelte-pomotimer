<script>
  import { session, tasks } from "../stores/pomodoro.store";

  $: currentTask = $tasks[$session];
</script>

<div class="session-container centered">
  <div class="session-info">
    <strong>{currentTask?.title || "No Task"}</strong>
    <p>
      {currentTask?.description || "Create a task to start "}
    </p>
  </div>
</div>

<style>
  .session-container {
    margin-top: 1.5rem;
    width: 100%;
  }

  .session-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong {
    font-size: 1.25rem;
    align-self: center;
    text-transform: uppercase;
  }

  p {
    margin-top: 1rem;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
</style>
