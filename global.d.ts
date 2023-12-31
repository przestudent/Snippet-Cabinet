import { UserSnippets, languageTypes } from '@prisma/client';
import { tagsType } from '@/private/tagsSourceOfTruth';

type snippetInfo = {
  snippetCode: string;
  snippetId?: number;
  langType: languageTypes;
  snippetTitle: string;
  public: boolean;
  tags: string[];
};

type optimalSnippetsData = { snippetId: number; snippetTitle: string };

type searchParams = {
  [k in tagsType]?: `${boolean}` | boolean;
} & { sort?: 'none' | 'oldest' | 'newest' };

type dropDownOptions = {
  lang: languageTypes;
};

type refetchFuncUserSnippets = <TPageData>(
  options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
) => Promise<QueryObserverResult<UserSnippets[], unknown>>;
