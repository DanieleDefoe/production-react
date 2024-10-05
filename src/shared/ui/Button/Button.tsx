import { ComponentProps, FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ComponentProps<'button'>, PropsWithChildren {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
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
