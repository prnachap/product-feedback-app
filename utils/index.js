export const getRemainingCharacters = (text) => {
  let remainingCharacters = 250 - text.length;
  if (remainingCharacters < 0) {
    remainingCharacters = 0;
  }
  return remainingCharacters;
};

export const getOptionsForDropdown = (options) => {
  return options.map((item) => ({ name: item, value: item }));
};

export const getTokenFromLocalStorage = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token;
};
