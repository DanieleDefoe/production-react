import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

void i18next.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',

  debug: __IS_DEV__,

  interpolation: {
    escapeValue: false,
  },

  resources: { en: { translations: {} } },
});

export default i18next;
