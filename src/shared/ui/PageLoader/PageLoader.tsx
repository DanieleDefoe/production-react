import clsx from 'clsx';
import { type FC } from 'react';
import { Loader } from '../Loader/Loader';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={clsx(classes.pageloader, className)}>
      <Loader />
    </div>
  );
};
