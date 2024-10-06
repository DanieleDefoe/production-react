import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Button } from '@/shared/ui';
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
    >
      <Button onClick={onToggle}>{t('toggle')}</Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
