import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import Image from 'next/image';
import GradientButton from '@/lib/GradientButton';
import { languageTypes } from '@prisma/client';
import RightSectionForm from './RightSectionForm';
import { useSearchParamsContext } from '@/hooks/SearchParamsProvider';
import ColumnRightContent from './ColumnRightContent';
import HamburgerPopUpMenu from './HamburgerPopUpMenu';

interface WelcomeMainProps {
  doesMediaMatch: boolean;
  setIsChosenLang: Dispatch<SetStateAction<Record<languageTypes, boolean>>>;
  isChosenLang: Record<languageTypes, boolean>;
}

const SnippetCabinetRightColumn: FunctionComponent<WelcomeMainProps> = ({
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
