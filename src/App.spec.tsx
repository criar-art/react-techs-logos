import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App';
import pkg from '../package.json'

describe('Should render <App/>', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('renders simple App', () => {
    expect(screen.getByTestId('app-container')).toBeInTheDocument()
  });
  it('render title with version', () => {
    const version: string = pkg.version;
    expect(screen.getByText(`react-techs-logos@${version}`)).toBeInTheDocument()
  });
});
