'use client';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import Image from 'next/image';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import BackgroundEmeraldToRed from '@/lib/BackgroundEmeraldToRed';
import GradientButton from '@/lib/GradientButton';
import Link from 'next/link';
import { snippetsData } from '../../../global';

interface SnippetCardProps {
  snippet: snippetsData;
}

const SnippetCard: FC<SnippetCardProps> = ({ snippet }) => {
  const editorConfig = [javascript(), javascript({ jsx: true }), html()];
  let editorConfigOption = 0;
  if (snippet.langType === 'JSX') {
    editorConfigOption = 1;
  } else if (snippet.langType === 'HTML') {
    editorConfigOption = 2;
  }
  const editorHeight = '45vh';
  return (
    <Link href={`${window.location.origin}/snippet/${snippet.snippetId}`}>
      <BackgroundEmeraldToRed innerPadding='0' marginAround='0'>
        <figure className='cursor-pointer'>
          <div className={`h-[${editorHeight}] bg-[#282c34] relative`}>
            <CodeMirror
              editable={false}
              theme={'dark'}
              value={snippet.snippetCode}
              height={`${editorHeight}`}
              extensions={[editorConfig[editorConfigOption]]}
            />
            <div>
              <Image
                className='absolute right-0 bottom-0'
                alt={`${snippet.langType}`}
                width={20}
                height={20}
                src={`/${snippet.langType}.svg`}
              />
            </div>
          </div>
          <figcaption className='p-4'>
            <h3>{snippet.snippetTitle}</h3>
            <div className='flex justify-between flex-row flex-wrap gap-2'>
              {snippet.tagBoilerPlate ? (
                <div className='p-1 text-sm  rounded flex items-center bg-gradient-to-b from-green-500 to-emerald-700'>
                  <div className='flex items-center'>boilerPlate</div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </figcaption>
        </figure>
      </BackgroundEmeraldToRed>
    </Link>
  );
};

export default SnippetCard;
