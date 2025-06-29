import { useState, useEffect } from 'react';

interface ScreenDimensions {
  width: number;
  height: number;
}

/**
 * Custom hook for getting the current screen dimensions
 *
 * @returns {ScreenDimensions} An object with `width` and `height` properties, representing the current screen dimensions.
 */
const useScreenDimensions = (): ScreenDimensions => {
  const [screenDimensions, setScreenDimensions] = useState<ScreenDimensions>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenDimensions;
};

export default useScreenDimensions;
