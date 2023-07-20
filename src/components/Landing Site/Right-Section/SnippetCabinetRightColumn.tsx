import { Dispatch, FC, SetStateAction } from 'react';
import { languageTypes } from '@prisma/client';
import ColumnRightContent from './ColumnRightContent';
import HamburgerPopUpMenu from './HamburgerPopUpMenu';

interface WelcomeMainProps {
  doesMediaMatch: boolean;
  setIsChosenLang: Dispatch<SetStateAction<Record<languageTypes, boolean>>>;
  isChosenLang: Record<languageTypes, boolean>;
}

const SnippetCabinetRightColumn: FC<WelcomeMainProps> = ({
  isChosenLang,
  setIsChosenLang,
  doesMediaMatch,
}) => {
  //  TODO: FIX THE Object.keys()  its very stupid that it return string and not T
  if (doesMediaMatch) {
    return (
      <ColumnRightContent
        isChosenLang={isChosenLang}
        setIsChosenLang={setIsChosenLang}
      />
    );
  } else {
    return (
      <HamburgerPopUpMenu
        isChosenLang={isChosenLang}
        setIsChosenLang={setIsChosenLang}
      />
    );
  }
};

export default SnippetCabinetRightColumn;
