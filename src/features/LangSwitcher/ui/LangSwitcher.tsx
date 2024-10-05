import { Button, ButtonTheme } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const onTranslate = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <Button theme={ButtonTheme.CLEAR} onClick={onTranslate}>
        {t('lang')}
      </Button>
    </div>
  );
};
