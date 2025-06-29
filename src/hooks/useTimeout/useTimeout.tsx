import { useCallback, useEffect, useRef } from 'react';

/**
 * A custom hook that returns a setTimeout and clearTimeout functions
 * @param {function} callback - The callback function to be executed after the specified delay
 * @param {number} delay - The delay time in milliseconds
 * @returns {any} The debounced value.
 */
interface UseTimeoutReturn {
  reset: () => void;
  clear: () => void;
}

type Callback = () => void;

const useTimeout = (callback: Callback, delay: number): UseTimeoutReturn => {
  const callbackRef = useRef<Callback>(callback);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
};

export default useTimeout;