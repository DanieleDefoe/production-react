import { AppLink, AppLinkTheme } from '@/shared/ui';
import clsx from 'clsx';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
  headerClassName?: string;
}

export const Navbar: FC<NavbarProps> = ({ headerClassName, className }) => {
  const { t } = useTranslation();

  return (
    <header className={clsx(headerClassName)}>
      <nav className={clsx(classes.navbar, className)}>
        <ul>
          <li>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">
              {t('main')}
            </AppLink>
          </li>
          <li>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
              {t('about')}
            </AppLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
