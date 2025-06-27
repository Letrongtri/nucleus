import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  const key = 'test-key';
  const initialValue = 'initial';

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should return the initial value if localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue));
    expect(result.current[0]).toBe(initialValue);
  });

  it('should use value from localStorage if available', () => {
    localStorage.setItem(key, JSON.stringify('stored'));
    const { result } = renderHook(() => useLocalStorage(key, initialValue));
    expect(result.current[0]).toBe('stored');
  });

  it('should update localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue));
    act(() => {
      result.current[1]('updated');
    });
    expect(localStorage.getItem(key)).toBe(JSON.stringify('updated'));
  });

  it('should handle JSON parse errors gracefully', () => {
    localStorage.setItem(key, 'not-json');
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const { result } = renderHook(() => useLocalStorage(key, initialValue));
    expect(result.current[0]).toBe(initialValue);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining(`Error reading localStorage key "${key}"`),
      expect.any(SyntaxError)
    );
    consoleSpy.mockRestore();
  });
});
