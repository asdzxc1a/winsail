// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Gallery = defineDocumentType(() => ({
  name: "Gallery",
  filePathPattern: `src/content/gallery/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: ".",
  documentTypes: [Gallery]
});
export {
  Gallery,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-SBY4GCEP.mjs.map
