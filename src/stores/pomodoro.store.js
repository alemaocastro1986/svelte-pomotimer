import { writable } from "svelte/store";
import { v4 as UUIDV4 } from "uuid";
import storage from "../utils/storage.js";

function workDurationStore() {
  const { subscribe, set, update } = writable(storage.getValue("work") ?? 25);

  return {
    subscribe,
    setValue: (value) => {
      if (value > 60 || value < 1) return;
      set(value);
    },
  };
}

function breakDurationStore() {
  const { subscribe, set, update } = writable(storage.getValue("break") ?? 5);

  return {
    subscribe,
    setValue: (value) => {
      if (value > 10 || value < 1) return;
      set(value);
    },
  };
}

function tasksStore() {
  const { subscribe, set, update } = writable(storage.getValue("tasks") ?? []);

  return {
    subscribe,
    addTask: (task) => {
      if (task.title && task.description) {
        update((prev) => [...prev, { ...task, id: UUIDV4() }]);
      }
    },
    removeTask: (id) => {
      update((prev) => prev.filter((task) => task.id !== id));
    },
  };
}

const workDuration = workDurationStore();
const breakDuration = breakDurationStore();
const tasks = tasksStore();
const session = writable(0);

export { workDuration, breakDuration, tasks, session };
