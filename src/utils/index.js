const save = (key, value) => {
  console.log(`Saving ${key}`);
  localStorage.setItem(key, value);
};

const capitalize = (str) => {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export { save, capitalize };
