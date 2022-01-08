<script>
  import { tasks } from "../../stores/pomodoro.store.js";
  import storage from "../../utils/storage.js";
  import TaskListItem from "./TaskListItem.svelte";

  tasks.subscribe((value) => {
    storage.setValue("tasks", value);
  });
</script>

<ul>
  {#each $tasks as task (task.id)}
    <TaskListItem
      title={task.title}
      onDelete={() => tasks.removeTask(task.id)}
    />
  {/each}
</ul>

<style>
  ul {
    margin-top: 1rem;
    list-style: none;
    padding: 0.5px;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
