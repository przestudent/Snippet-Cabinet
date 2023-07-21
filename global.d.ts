import { UserSnippets, languageTypes } from '@prisma/client';

type snippetsTags = 'boilerPlate';
type snippetInfo = {
  snippetCode: string;
  snippetId?: number;
  langType: languageTypes;
  snippetTitle: string;
  tags: snippetsTags[];
  public: boolean;
};

type snippetInfoPostAPI = snippetInfo & {};

type snippetsData = {
  snippetId: number;
  createdAt: Date;
  public: boolean;
  langType: languageTypes;
  tagBoilerPlate: boolean;
  snippetCode: string;
  snippetTitle: string;
  userOwnerId: number;
  profileImageUrl: string;
};

type snippetPageData = snippetsData & { username: string };

type optimalSnippetsData = { snippetId: number; snippetTitle: string };

type searchParams = {
  boilerplate?: `${boolean}` | boolean;
  sort?: 'none' | 'oldest' | 'newest';
};

type dropDownOptions = {
  lang: languageTypes;
};

type refetchFuncUserSnippets = <TPageData>(
  options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
) => Promise<QueryObserverResult<UserSnippets[], unknown>>;
