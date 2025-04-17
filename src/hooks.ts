import { useEffect, useState } from "react";

export default function usePersistentState<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [state, setInternalState] = useState<T>(() => {
    const valueFromStorage = localStorage.getItem(key);
    if (valueFromStorage) {
      try {
        const parsedValue = JSON.parse(valueFromStorage);
        // Add a type check to ensure parsedValue matches the expected type
        if (typeof parsedValue === typeof initialValue) {
          return parsedValue as T;
        } else {
          console.warn(
            `Stored value for key "${key}" does not match the expected type. Using initialValue instead.`
          );
          return initialValue;
        }
      } catch (e) {
        console.error(
          `Error parsing localStorage value for key "${key}". Using initialValue instead.`,
          e
        );
        return initialValue;
      }
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setInternalState];
}
