import { useEffect } from 'react';

const useKeyboardBindings = (keyHandlers: Record<string, () => void>) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      if (keyHandlers[key]) {
        keyHandlers[key]();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyHandlers]);
};

export default useKeyboardBindings;
