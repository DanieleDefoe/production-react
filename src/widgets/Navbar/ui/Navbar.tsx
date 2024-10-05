import clsx from 'clsx';
import { type FC } from 'react';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
  headerClassName?: string;
}

export const Navbar: FC<NavbarProps> = ({ headerClassName, className }) => {
  const { t: tMain } = useTranslation('main');
  const { t: tAbout } = useTranslation('about');

  return (
    <header className={clsx(headerClassName)}>
      <nav className={clsx(classes.navbar, className)}>
        <ul>
          <li>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">
              {tMain('title')}
            </AppLink>
          </li>
          <li>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
              {tAbout('title')}
            </AppLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
