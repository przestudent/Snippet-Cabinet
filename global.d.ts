type languageTypes = 'JSX' | 'JavaScript' | 'HTML';

type snippetInfo = {
  editorCode: string;
  editorLang: languageTypes;
  snippetName: string;
  tags: string[];
};

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
