import { FC } from 'react';
import DashboardCodeEditor from './DashboardCodeEditor';
import YourSnippets from './YourSnippets';

interface DashboardInnerContentProps {}

const DashboardInnerContent: FC<DashboardInnerContentProps> = () => {
  return (
    <div className='flex'>
      <YourSnippets />
      <DashboardCodeEditor />
    </div>
  );
};

export default DashboardInnerContent;
