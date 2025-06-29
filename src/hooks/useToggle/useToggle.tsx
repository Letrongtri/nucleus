import { useState } from 'react';

/**
 * Custom hook for toggling a boolean value
 *
 * @param defaultValue - Default value for the toggle. Default is `false`.
 * @returns An array containing the current toggle value and a function to toggle it.
 */
const useToggle = (
  defaultValue: boolean = false
): [boolean, (value?: boolean) => void] => {
  const [value, setValue] = useState<boolean>(defaultValue);

  /**
   * Toggles the current value.
   */
  const toggleValue = () => {
    setValue((currentValue) => !currentValue);
  };

  return [value, toggleValue];
};

export default useToggle;
