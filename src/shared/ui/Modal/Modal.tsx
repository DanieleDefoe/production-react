import clsx from 'clsx';
import {
  useEffect,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import classes from './Modal.module.scss';

export interface ModalProps extends PropsWithChildren {
  className?: string;
  isOpen?: boolean;
  onClose?: VoidFunction;
  closeOnOverlayClick?: boolean;
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  closeOnOverlayClick = true,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen) {
      setIsAnimating(true);
      dialog?.removeAttribute('open');
      dialog?.showModal();
    } else if (dialog?.open) {
      setIsAnimating(true);
      setTimeout(() => {
        dialog?.close();
      }, 300);
    }
  }, [isOpen]);

  const onOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose?.();
    }
  };

  return (
    <dialog
      id="modal"
      ref={dialogRef}
      className={clsx(classes.modal, className, {
        [classes.animating]: isAnimating,
        [classes.open]: isOpen,
      })}
      onAnimationEnd={() => {
        setIsAnimating(false);
      }}
      onClose={onClose}
      onClick={onOverlayClick}
    >
      <div
        className={classes.content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </dialog>
  );
};
