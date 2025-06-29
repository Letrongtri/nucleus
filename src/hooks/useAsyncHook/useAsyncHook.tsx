import { useState, useEffect } from 'react';

/**
 * Custom hook for handling async operations
 *
 * @param {Function} func - The async function to be executed.
 *
 * @returns {Array} An array containing the result of the async function (if successful), any error (if there was one), and a boolean indicating if the function is still loading.
 */

const useAsyncHook = <T, E = unknown>(func: () => Promise<T>) => {
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const runner = async () => {
      try {
        const res = await func();
        if (isMounted) setResult(res);
      } catch (err) {
        if (isMounted) setError(err as E);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    runner();

    return () => {
      isMounted = false;
    };
  }, [func]);

  return [result, error, isLoading] as const;
};

export default useAsyncHook;