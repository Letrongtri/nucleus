/**
 * @jest-environment jsdom
 */
import { renderHook, waitFor } from '@testing-library/react';
import { default as useDebounce } from './useDebounce';

describe('useDebounce', () => {
  it('should return the debounced value', () => {
    const mockFunc = jest.fn();

    let x = 1;

    renderHook(() => useDebounce(mockFunc, 1000, [x]));

    x = 5;

    waitFor(() => {
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});
