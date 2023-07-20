import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
} from 'react';
import BackgroundEmeraldToRed from './BackgroundEmeraldToRed';
import { createPortal } from 'react-dom';

interface ModalProps {
  openState: boolean;
  setOpenState: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  openState,
  setOpenState,
}) => {
  useEffect(() => {
    function windowCallback(keyEvent: globalThis.KeyboardEvent) {
      if (keyEvent.key === 'Escape') {
        setOpenState(false);
      }
    }
    window.addEventListener('keydown', windowCallback);
    return window.removeEventListener('keydown', windowCallback);
  }, []);
  if (!openState) return <></>;
  return createPortal(
    <div
      data-bgclose='true'
      onClick={(e) => {
        if ((e.target as HTMLElement).dataset['bgclose']) {
          setOpenState(false);
        }
      }}
      className='fixed top-0 w-full h-full bg-[rgb(0,0,0,0.25)] flex justify-center items-center z-50'
    >
      {children}
    </div>,
    document.body
  );
};

export default Modal;

import { useState } from 'react';

const useModalState = (initialState = false) => {
  const [openState, setOpenState] = useState(initialState);
  return { openState, setOpenState };
};

export { useModalState };
