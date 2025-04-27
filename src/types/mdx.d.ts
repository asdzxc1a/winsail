declare module '*.mdx' {
  import * as React from 'react';
  let MDXComponent: React.FC<any>;
  export default MDXComponent;
  export const meta: { [key: string]: any };
}
