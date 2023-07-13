'use client';
import { MutableRefObject, RefObject, useEffect } from 'react';

function useOutsideClick({
  ref,
  functionForOutside,
  booleanFunction,
}: {
  ref: RefObject<HTMLElement>;
  functionForOutside: () => void;
  booleanFunction?: () => boolean;
}) {
  useEffect(() => {
    function handleClickOutside({ target }: Event) {
      const defaultFunc = () =>
        ref.current && !ref.current.contains(target as Node);
      const booleanFunctionInner = booleanFunction ?? defaultFunc;
      if (booleanFunctionInner()) {
        functionForOutside();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useOutsideClick;
