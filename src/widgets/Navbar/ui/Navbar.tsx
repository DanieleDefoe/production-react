import clsx from 'clsx';
import { type FC } from 'react';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme, ThemeSwitcher } from '@/shared/ui';

interface NavbarProps {
  className?: string;
  headerClassName?: string;
}

export const Navbar: FC<NavbarProps> = ({ headerClassName, className }) => {
  return (
    <header className={clsx(headerClassName)}>
      <nav className={clsx(classes.navbar, className)}>
        <ul>
          <li>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">
              Main
            </AppLink>
          </li>
          <li>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
              About
            </AppLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
