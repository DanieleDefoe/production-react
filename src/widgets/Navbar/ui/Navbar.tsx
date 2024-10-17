import { useModal } from '@/shared/hooks';
import { Button, ButtonTheme, Modal } from '@/shared/ui';
import clsx from 'clsx';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const { isOpen, onClose, onOpen } = useModal();

  return (
    <header className={clsx(classes.navbar, className)}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpen}>
        {t('login')}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        {t('login')}
      </Modal>
    </header>
  );
};
