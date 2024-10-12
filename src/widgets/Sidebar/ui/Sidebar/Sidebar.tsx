import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { AboutIcon, HomeIcon } from '@/shared/assets';
import { RoutePath } from '@/shared/config';
import {
  AppLink,
  AppLinkTheme,
  Button,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui';
import clsx from 'clsx';
import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div
      className={clsx(
        classes.sidebar,
        { [classes.collapsed]: collapsed },
        className
      )}
      data-testid="sidebar"
    >
      <nav>
        <nav className={clsx(classes.navbar, className)}>
          <ul>
            <li>
              <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                <div className={classes['nav-item']}>
                  <HomeIcon className={classes.icon} />
                  <span className={classes['link-text']}>{t('main')}</span>
                </div>
              </AppLink>
            </li>
            <li>
              <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                <div className={classes['nav-item']}>
                  <AboutIcon className={classes.icon} />
                  <span className={classes['link-text']}>{t('about')}</span>
                </div>
              </AppLink>
            </li>
          </ul>
        </nav>
      </nav>
      <Button
        onClick={onToggle}
        data-testid="sidebar-toggle"
        className={classes.toggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
