import { FC, PropsWithChildren } from 'react';

interface FieldsetWrapperProps {
  fieldsetLegend: string;
}

const FieldsetWrapper: FC<PropsWithChildren<FieldsetWrapperProps>> = ({
  fieldsetLegend,
  children,
}) => {
  return (
    <fieldset className='border-t-2 border-green-600 py-4'>
      <legend className='pr-2 text-emerald-500 text-xl'>
        {fieldsetLegend}
      </legend>
      {children}
    </fieldset>
  );
};

export default FieldsetWrapper;
