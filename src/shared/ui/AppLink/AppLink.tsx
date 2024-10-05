import { type FC } from 'react';
import clsx from 'clsx';
import classes from './AppLink.module.scss';
import { Link, type LinkProps } from 'react-router-dom';
import { AppLinkTheme } from './lib/types';

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...props
}) => {
  return (
    <Link
      className={clsx(classes.applink, classes[theme], className)}
      {...props}
    >
      {children}
    </Link>
  );
};
