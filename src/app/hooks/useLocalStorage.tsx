import { Dispatch, SetStateAction, useState } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useLocalStorage<T = any>(key: string, initialValue?: T): [T, SetValue<T>] {
  const readValue = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      return (item ? parseJSON(item) : initialValue) as T;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue as T;
    }
  };

  const [storedValue, setStoredValue] = useState(readValue);

  const setValue: SetValue<T> = value => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch (error) {
    console.log('parsing error on', { value });
    return undefined;
  }
}
