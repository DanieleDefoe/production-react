import clsx from 'clsx';
import { FC } from 'react';
import classes from './Navbar.module.scss';
import { useTheme } from '@/shared/config';
import { AppLink, AppLinkTheme } from '@/shared/ui';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { toggleTheme } = useTheme();

  return (
    <nav className={clsx(classes.navbar, className)}>
      <button onClick={toggleTheme}>Toggle theme</button>
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
  );
};
