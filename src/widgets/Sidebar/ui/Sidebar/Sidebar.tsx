import clsx from 'clsx';
import { type FC, useState } from 'react';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import classes from './Sidebar.module.scss';
import { Button } from '@/shared/ui';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
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
      <Button onClick={onToggle}>toggle</Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
