import clsx from 'clsx';
import { type FC } from 'react';
import classes from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={clsx(classes.loader, className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
