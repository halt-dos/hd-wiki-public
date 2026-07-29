declare module '*.module.scss' {
  const classes: {readonly [key: string]: string};
  export default classes;
}

declare module '*.scss' {
  const css: string;
  export default css;
}

declare module '*.css' {
  const css: string;
  export default css;
}

declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.png' {
  const src: string;
  export default src;
}
