import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nTest from '../../config/i18n/i18nTest';

export interface RenderWithProvidersOptions {
  route?: string;
}

export const renderWithProviders = (
  component: ReactNode,
  options: RenderWithProvidersOptions = {}
) => {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
    </MemoryRouter>
  );
};
