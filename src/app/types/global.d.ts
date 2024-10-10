declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
  import type { FC, SVGProps } from 'react';
  const SVG: FC<SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
