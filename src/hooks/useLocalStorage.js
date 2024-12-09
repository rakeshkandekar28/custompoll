export const useLocalStorage = () => {
  function setDataInLocalStorage(key, data) {
    localStorage.setItem(key, data);
  }
  function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return { setDataInLocalStorage, getDataFromLocalStorage };
};