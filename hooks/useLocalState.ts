import { useEffect, useState, Dispatch, SetStateAction } from "react";

type LocalStateHookReturnType<T> = [T, Dispatch<SetStateAction<T>>];

/**
 *
 * @param {any} initialState
 * @param {string} stateKey
 * @returns {[any, Function]}
 */
function useLocalState<T>(
  initialState: T,
  stateKey: string
): LocalStateHookReturnType<T> {
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return initialState;
    const localValue = sessionStorage.getItem(stateKey);
    return localValue ? JSON.parse(localValue) : initialState;
  });

  useEffect(() => {
    sessionStorage.setItem(stateKey, JSON.stringify(state));
  }, [state, stateKey]);

  return [state, setState];
}

export default useLocalState;
