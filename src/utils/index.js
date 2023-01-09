const save = (key, value) => {
  console.log(`Saving ${key} with value ${value}...`);
  localStorage.setItem(key, value);
};

const capitalize = (str) => { 
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { save, capitalize };
