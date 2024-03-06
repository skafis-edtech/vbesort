import { useEffect, useState } from "react";

export default function usePersistentState<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [state, setInternalState] = useState<T>(() => {
    const valueFromStorage = localStorage.getItem(key);
    if (valueFromStorage) {
      // If there is something in localStorage, we parse it
      return JSON.parse(valueFromStorage);
    } else {
      // If not, we use the initialValue provided
      return initialValue;
    }
  });

  useEffect(() => {
    // Save to local storage whenever state changes
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]); // Only re-run effect if key or state changes

  return [state, setInternalState];
}
