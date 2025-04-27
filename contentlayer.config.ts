import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Gallery = defineDocumentType(() => ({
  name: 'Gallery',
  filePathPattern: `src/content/gallery/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
  },
}));

export default makeSource({
  contentDirPath: '.',
  documentTypes: [Gallery],
});
