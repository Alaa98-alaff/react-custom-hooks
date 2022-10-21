import { useEffect, useState } from "react";

const getValue = (key, initialValue) => {
  return JSON.parse(localStorage.getItem(key));
};

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
