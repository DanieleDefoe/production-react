import { Button } from '@/shared/ui';
import clsx from 'clsx';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={clsx(classes.pageerror, className)}>
      <p>{t('unexpectedError')}</p>
      <Button onClick={refreshPage}>{t('reloadPage')}</Button>
    </div>
  );
};
