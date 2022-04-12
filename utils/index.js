export const getRemainingCharacters = (text) => {
  let remainingCharacters = 250 - text?.length ?? 0;
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

export const getTotalComments = (data) => {
  let count = 0;
  data.forEach((item) => getTotal(item));
  function getTotal(obj) {
    if (!obj?.comments.length) {
      return (count += 1);
    }
    count++;
    return count + obj?.comments.forEach((item) => getTotal(item));
  }

  return count;
};
