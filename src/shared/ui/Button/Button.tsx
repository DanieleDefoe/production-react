import clsx from 'clsx';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import classes from './Button.module.scss';
import { ButtonSize, ButtonTheme } from './lib/types';

interface ButtonProps extends ComponentProps<'button'>, PropsWithChildren {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.CLEAR,
  square,
  size = ButtonSize.M,
  ...props
}) => {
  return (
    <button
      className={clsx(
        classes.button,
        classes[theme],
        classes[size],
        { [classes.square]: square },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
