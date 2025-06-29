/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react';
import { default as useToggle } from './useToggle';

test('useToggle should toggle state correctly', () => {
  const { result } = renderHook(() => useToggle());
  const [value, toggle] = result.current;
  expect(value).toBe(false);
  act(() => {
    toggle();
  });
  const [valueAfterFirstToggle] = result.current;
  expect(valueAfterFirstToggle).toBe(true);
  act(() => {
    toggle();
  });
  const [valueAfterSecondToggle] = result.current;
  expect(valueAfterSecondToggle).toBe(false);
});
