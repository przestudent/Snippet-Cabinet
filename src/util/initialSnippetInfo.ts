import { snippetInfo } from '../../global';

function initialSnippetInfo(): snippetInfo {
  return {
    snippetCode: "console.log('Hello World')",
    langType: 'JavaScript',
    snippetTitle: 'Snippet name',
    tags: [],
    public: true,
  };
}

export default initialSnippetInfo;
