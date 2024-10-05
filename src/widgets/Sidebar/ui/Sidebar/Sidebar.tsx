import { FC, useState } from 'react';
import clsx from 'clsx';
import classes from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/shared/ui';

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
      <button onClick={onToggle}>toggle</button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        {/* <LangSwitcher /> */}
      </div>
    </div>
  );
};
