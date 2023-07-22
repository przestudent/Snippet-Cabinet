const TAGS = ['boilerPlate'] as const;

export default TAGS;
export type tagsType = (typeof TAGS)[number];
