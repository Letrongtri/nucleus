import { renderHook, act } from '@testing-library/react';
import useScreenDimensions from './useScreenDimensions';

describe('useScreenDimensions', () => {
  const originalInnerWidth = window.innerWidth;
  const originalInnerHeight = window.innerHeight;

  beforeEach(() => {
    // Set default window size
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768
    });
  });

  afterEach(() => {
    // Restore original window size
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: originalInnerHeight
    });
  });

  it('should return the initial screen dimensions', () => {
    const { result } = renderHook(() => useScreenDimensions());
    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  it('should update dimensions on window resize', () => {
    const { result } = renderHook(() => useScreenDimensions());

    act(() => {
      window.innerWidth = 800;
      window.innerHeight = 600;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(600);
  });

  it('should clean up event listener on unmount', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useScreenDimensions());

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
  });
});
