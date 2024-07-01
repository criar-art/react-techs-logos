import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

import pkg from '../../../../package.json';

import AppVersion from '.';

const appVersion = pkg.version;
const reactVersion = pkg.dependencies.react.replace('^', '');

describe("Should render <AppVersion/>", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <AppVersion />
      </I18nextProvider>
    );
  })
  it('renders AppVersion', () => {
    expect(screen.getByTestId('app-version')).toBeInTheDocument();
  });
  it('AppVersion validation version SlideContent', () => {
    expect(screen.getByTestId('app-version').textContent).toBe(`SlideContent ${appVersion}`);
  });
  it('AppVersion validation version React', () => {
    expect(screen.getByTestId('react-version').textContent).toBe(`React ${reactVersion}`);
  });
});
