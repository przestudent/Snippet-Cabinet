const TAGS = ['boilerPlate', 'hook', 'pattern'] as const;

export default TAGS;
export type tagsType = (typeof TAGS)[number];
