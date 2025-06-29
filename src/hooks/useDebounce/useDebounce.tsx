import { useEffect } from 'react';
import { default as useTimeout } from '../useTimeout/useTimeout';
/**

/**
 * A custom hook that returns a setTimeout and clearTimeout functions
 * @param {function} callback - The callback function to be executed after the specified delay
 * @param {number} delay - The delay time in milliseconds
 * @param {array} dependencies - An array of dependencies used by the useEffect hook
 * @returns {any} The debounced value.
 */

interface UseDebounceOptions {
    callback: () => void;
    delay: number;
    dependencies: React.DependencyList;
}

interface UseTimeoutReturn {
    reset: () => void;
    clear: () => void;
}

const useDebounce = (
    callback: UseDebounceOptions['callback'],
    delay: UseDebounceOptions['delay'],
    dependencies: UseDebounceOptions['dependencies']
): void => {
    const { reset, clear }: UseTimeoutReturn = useTimeout(callback, delay);
    useEffect(reset, [...dependencies, reset]);
    useEffect(clear, []);
};
export default useDebounce;