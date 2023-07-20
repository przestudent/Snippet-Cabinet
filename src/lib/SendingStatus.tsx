import { FC } from 'react';

interface SendingStatusProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const SendingStatus: FC<SendingStatusProps> = ({
  isError,
  isLoading,
  isSuccess,
}) => {
  console.log('statuses', isError, isLoading, isSuccess);
  return (
    <>
      <div className='text-7xl text-emerald-500'>
        {isLoading && <h1 className='animate-ping'>Loading...</h1>}
        {isSuccess && <h1 className='animate-bounce'>Success!</h1>}
        {isError && <h1 className='text-red-700 animate-pulse'>Error!</h1>}
      </div>
    </>
  );
};

export default SendingStatus;
