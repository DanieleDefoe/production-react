declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
  import type { SVGProps } from 'react';
  const SVG: React.FC<SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
