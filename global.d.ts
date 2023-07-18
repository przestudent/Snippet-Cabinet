import { languageTypes } from '@prisma/client';

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
};

type optimalSnippetsData = { snippetId: number; snippetTitle: string };

type searchParams = {
  boilerplate?: boolean;
  sort?: 'none' | 'oldest' | 'newest';
};
