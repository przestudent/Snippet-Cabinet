import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import { languageTypes } from '@prisma/client';
import { Dispatch, FC, SetStateAction } from 'react';
import RightSectionForm from './RightSectionForm';
import Image from 'next/image';
import RightColumnTopSection from './RightColumnTopSection';

interface ColumnRightContentProps {
  setIsChosenLang: Dispatch<SetStateAction<Record<languageTypes, boolean>>>;
  isChosenLang: Record<languageTypes, boolean>;
  className?: string;
}

const ColumnRightContent: FC<ColumnRightContentProps> = ({
  isChosenLang,
  setIsChosenLang,
  className,
}) => {
  return (
    <BackgroundEmeraldToRed
      insideClassName='h-full'
      marginAround='1'
      className={`ml-3 h-max sticky top-2 ${className}`}
    >
      <RightColumnTopSection
        isChosenLang={isChosenLang}
        setIsChosenLang={setIsChosenLang}
      />
      <RightSectionForm />
    </BackgroundEmeraldToRed>
  );
};

export default ColumnRightContent;
