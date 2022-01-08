<script>
  import { tasks } from "../../stores/pomodoro.store.js";

  let title;
  let description;

  function handleSubmit(e) {
    tasks.addTask({ title, description });
    title = "";
    description = "";
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-control">
    <label for="session-title">Title</label>
    <input
      type="text"
      name="title"
      id="session-title"
      required
      maxlength="30"
      placeholder="study javascript"
      bind:value={title}
    />
  </div>
  <div class="form-control">
    <label for="session-Description">Short Description</label>

    <textarea
      id="session-Description"
      required
      name="description"
      placeholder="Task description"
      rows="5"
      bind:value={description}
    />
  </div>
  <button>Create Task</button>
</form>

<style>
  form {
    width: 100%;
  }

  .form-control {
    width: 100%;
  }

  .form-control + .form-control {
    margin-top: 1rem;
  }

  label {
    font-size: small;
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    border: none;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
    color: var(--white);
    font-size: 0.875rem;
  }

  textarea {
    resize: none;
    padding: 0.5rem;
  }

  input {
    height: 38px;
    padding: 0 16px;
    font-size: 1rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border: 1px solid var(--green-300);
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--red-100);
  }

  button {
    height: 44px;
    width: 100%;
    margin-top: 1rem;
    border-radius: 4px;
    background: var(--green-400);
    color: var(--white);
    font-size: 1.25rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
</style>
