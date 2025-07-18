/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react';
import { default as useTimeout } from './useTimeout';

describe('useTimeout', () => {
  it('should call the callback after the specified delay', () => {
    const delay = 1000;
    let callbackCalled = false;
    const callback = () => {
      callbackCalled = true;
    };

    renderHook(() => useTimeout(callback, delay));
    expect(callbackCalled).toBe(false);

    setTimeout(() => {
      expect(callbackCalled).toBe(true);
    }, delay + 100);
  });

  it('should be able to reset the timeout', () => {
    const delay = 1000;
    let callbackCalled = false;
    const callback = () => {
      callbackCalled = true;
    };

    const { result } = renderHook(() => useTimeout(callback, delay));
    act(() => {
      result.current.reset();
    });

    expect(callbackCalled).toBe(false);

    setTimeout(() => {
      expect(callbackCalled).toBe(true);
    }, delay + 100);
  });

  it('should be able to clear the timeout', () => {
    const delay = 1000;
    let callbackCalled = false;
    const callback = () => {
      callbackCalled = true;
    };

    const { result } = renderHook(() => useTimeout(callback, delay));
    act(() => {
      result.current.clear();
    });
    setTimeout(() => {
      expect(callbackCalled).toBe(false);
    }, delay + 100);
  });
  it('should be able to clear the timeout with 0 delay', () => {
    const delay = 0;
    let callbackCalled = false;
    const callback = () => {
      callbackCalled = true;
    };

    const { result } = renderHook(() => useTimeout(callback, delay));
    act(() => {
      result.current.clear();
    });
    expect(callbackCalled).toBe(false);
  });
  it('should be able to clear the timeout with negative delay', () => {
    const delay = -1000;
    let callbackCalled = false;
    const callback = () => {
      callbackCalled = true;
    };

    const { result } = renderHook(() => useTimeout(callback, delay));
    act(() => {
      result.current.clear();
    });
    expect(callbackCalled).toBe(false);
  });

  it('should be optimized for performance', () => {
    const delay = 1000;
    let callbackCalled = false;
    const callback = () => {
      callbackCalled = true;
    };

    renderHook(() => useTimeout(callback, delay));
    const startTime = performance.now();

    setTimeout(() => {
      expect(callbackCalled).toBe(true);
      const endTime = performance.now();
      expect(endTime - startTime).toBeLessThan(delay + 10);
    }, delay + 10);
  });
});
