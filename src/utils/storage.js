const baseKey = "pomodoro";

function getValue(key, defaultValue = null) {
  const value = localStorage.getItem(`${baseKey}:${key}`) ?? null;
  return value ? JSON.parse(value) : defaultValue;
}
function setValue(key, value) {
  if (typeof value === "number") {
    localStorage.setItem(`${baseKey}:${key}`, value);
    return;
  }
  value && localStorage.setItem(`${baseKey}:${key}`, JSON.stringify(value));
}

const storage = {
  getValue,
  setValue,
};

export default storage;
