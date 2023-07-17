import { Dispatch, FC, KeyboardEvent, SetStateAction, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ColumnRightContent from './ColumnRightContent';
import { languageTypes } from '@prisma/client';

interface PopUpColumnRightProps {
  setIsChosenLang: Dispatch<SetStateAction<Record<languageTypes, boolean>>>;
  isChosenLang: Record<languageTypes, boolean>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const PopUpColumnRight: FC<PopUpColumnRightProps> = ({
  isChosenLang,
  isOpen,
  setIsOpen,
  setIsChosenLang,
}) => {
  useEffect(() => {
    function keyDownListener(e: globalThis.KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', keyDownListener);
    return () => window.removeEventListener('keydown', keyDownListener);
  }, []);
  return createPortal(
    <div
      data-bgclose='true'
      onClick={(e) => {
        if ((e.target as HTMLElement).dataset.bgclose) {
          setIsOpen(false);
        }
      }}
      className='fixed top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.3)]  flex items-center justify-center'
    >
      <ColumnRightContent
        isChosenLang={isChosenLang}
        setIsChosenLang={setIsChosenLang}
      />
    </div>,
    document.body
  );
};

export default PopUpColumnRight;
