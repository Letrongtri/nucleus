/**
 * @jest-environment jsdom
 */
import React from 'react';
import { renderHook, fireEvent, act } from '@testing-library/react';
import { default as useToggle } from './useToggle';

test('useToggle should toggle state correctly', () => {
  const { result } = renderHook(() => useToggle());
  console.log(result.current)
  const [value, toggle ] = result.current;
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