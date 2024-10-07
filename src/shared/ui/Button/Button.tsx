import clsx from 'clsx';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import classes from './Button.module.scss';
import { ButtonTheme } from './lib/types';

interface ButtonProps extends ComponentProps<'button'>, PropsWithChildren {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.CLEAR,
  ...props
}) => {
  return (
    <button
      className={clsx(classes.button, classes[theme], className)}
      {...props}
    >
      {children}
    </button>
  );
};
