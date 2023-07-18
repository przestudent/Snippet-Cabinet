import { FC } from 'react';
import FormRightInput from './FormRightInput';
import FieldsetWrapper from './FieldsetWrapper';
import { useSearchParamsContext } from '@/hooks/SearchParamsProvider';

interface RightSectionFormProps {}

const RightSectionForm: FC<RightSectionFormProps> = () => {
  const { queryParams, setQueryParams } = useSearchParamsContext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newQueryParams: { [k: string]: FormDataEntryValue } = {};
        for (const kv of formData.entries()) {
          newQueryParams[kv[0] as unknown as string] = kv[1];
        }
        if (formData.get('boilerplate') === null) {
          newQueryParams['boilerplate'] = 'false';
        }
        setQueryParams(newQueryParams as unknown as { [k: string]: string });
      }}
    >
      <FieldsetWrapper fieldsetLegend='Filter tags'>
        <FormRightInput
          inputValue='true'
          inputType='checkbox'
          inputName='boilerplate'
          inputId='tag-boilerplate'
          inputLabel='BoilerPlate'
        />
      </FieldsetWrapper>
      <FieldsetWrapper fieldsetLegend='Sorting method'>
        <FormRightInput
          inputValue='none'
          inputId='sort-none'
          inputLabel='None'
          inputName='sort'
          inputType='radio'
        />
        <FormRightInput
          inputValue='newest'
          inputId='sort-newest'
          inputLabel='Newest'
          inputName='sort'
          inputType='radio'
        />
        <FormRightInput
          inputValue='oldest'
          inputId='sort-oldest'
          inputLabel='Oldest'
          inputName='sort'
          inputType='radio'
        />
      </FieldsetWrapper>

      <div className='flex justify-center'>
        <button className='border-2 border-emerald-600 text-emerald-400 py-2 px-4 text-xl  rounded-xl'>
          Apply
        </button>
      </div>
    </form>
  );
};

export default RightSectionForm;
