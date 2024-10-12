import { RoutePath } from '@/shared/config';
import { AppLink } from '@/shared/ui';
import clsx from 'clsx';
import { type FC } from 'react';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <header className={clsx(classes.navbar, className)}>
      <AppLink to={RoutePath.main}>/</AppLink>
    </header>
  );
};
