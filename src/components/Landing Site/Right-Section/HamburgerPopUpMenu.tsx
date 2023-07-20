import { Dispatch, FC, SetStateAction, useState } from 'react';
import Image from 'next/image';
import ColumnRightContent from './ColumnRightContent';
import { languageTypes } from '@prisma/client';
import { createPortal } from 'react-dom';
import PopUpColumnRight from './PopUpColumnRight';

interface HamburgerPopUpMenuProps {
  setIsChosenLang: Dispatch<SetStateAction<Record<languageTypes, boolean>>>;
  isChosenLang: Record<languageTypes, boolean>;
}

const HamburgerPopUpMenu: FC<HamburgerPopUpMenuProps> = ({
  isChosenLang,
  setIsChosenLang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    return (
      <PopUpColumnRight
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsChosenLang={setIsChosenLang}
        isChosenLang={isChosenLang}
      />
    );
  }
  return (
    <div className='m-5 fixed right-0 bottom-0 p-2 bg-emerald-600 flex items justify-center rounded-2xl  z-50'>
      <div
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        className='cursor-pointer flex items-center justify-center'
      >
        <Image
          src={'/hamburger-menu-svgrepo-com.svg'}
          alt='Expand button'
          height={60}
          width={60}
        />
      </div>
    </div>
  );
};

export default HamburgerPopUpMenu;
