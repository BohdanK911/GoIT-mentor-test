const debounce = (callback, delay = 400) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;

      callback(...args);
    }, delay);
  };
};

export default debounce;
