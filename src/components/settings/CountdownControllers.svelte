<script>
  import { breakDuration, workDuration } from "../../stores/pomodoro.store.js";
  import storage from "../../utils/storage.js";

  breakDuration.subscribe((value) => {
    storage.setValue("break", value);
  });

  workDuration.subscribe((value) => {
    storage.setValue("work", value);
  });
</script>

<section>
  <small>Work duration</small>
  <input
    id="work-duration"
    step="5"
    type="number"
    max="60"
    min="1"
    on:change={(e) => workDuration.setValue(e.target.value)}
    value={$workDuration}
  />
</section>
<section>
  <small>Break duration</small>

  <input
    id="break-duration"
    step="1"
    type="number"
    max="10"
    min="1"
    on:change={(e) => breakDuration.setValue(e.target.value)}
    value={$breakDuration}
  />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }

  section + section {
    margin-top: 1rem;
  }

  section small {
    margin-bottom: 0.5rem;
  }

  input[type="number"] {
    height: 38px;
    border: none;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
    padding: 0 16px;
    color: var(--white);
    font-size: 1rem;
  }

  input::placeholder {
    color: var(--red-100);
  }
</style>
