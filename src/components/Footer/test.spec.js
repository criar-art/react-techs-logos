import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

import AppFooter from '.';

import pkg from '../../../../package.json';

const appVersion = pkg.version;
const reactVersion = pkg.dependencies.react.replace('^', '');

describe("Should render <AppFooter/>", () => {
  it('renders footer with credits and link', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <AppFooter/>
      </I18nextProvider>
    );

    const title = screen.getByTestId('app-footer');

    expect(title.querySelector('a').href).toBe('https://github.com/criar-art/slidecontent-react')
    expect(title.querySelector('a').textContent).toBe(`React ${reactVersion}SlideContent ${appVersion}@lucasferreiralimax`)
  });
});
