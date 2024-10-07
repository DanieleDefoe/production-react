import clsx from 'clsx';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(classes.notfoundpage, className)}>
      {t('not-found-page')}
    </div>
  );
};
