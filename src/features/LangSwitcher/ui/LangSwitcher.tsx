import { Button, ButtonTheme } from '@/shared/ui';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ short }) => {
  const { t, i18n } = useTranslation();

  const onTranslate = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    void i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <Button theme={ButtonTheme.CLEAR} onClick={onTranslate}>
        {t(short ? 'short' : 'lang')}
      </Button>
    </div>
  );
};
