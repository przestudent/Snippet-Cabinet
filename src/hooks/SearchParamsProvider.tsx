import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import useQueryParams from './useQueryParams';
import { searchParams } from '../../global';

interface searchParamsContext {
  queryParams: searchParams;
  setQueryParams: (params: searchParams) => void;
}

const SearchParamsContext = createContext<searchParamsContext>(
  {} as unknown as searchParamsContext
);

export function useSearchParamsContext() {
  return useContext(SearchParamsContext);
}

export const SearchParamsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { queryParams, setQueryParams } = useQueryParams();
  return (
    <SearchParamsContext.Provider value={{ queryParams, setQueryParams }}>
      {children}
    </SearchParamsContext.Provider>
  );
};
