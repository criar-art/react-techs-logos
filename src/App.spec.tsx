import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App';

describe('Should render <App/>', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('renders simple App', () => {
    expect(screen.getByTestId('app-container')).toBeInTheDocument()
  });
  it('render title', () => {
    expect(screen.getAllByText("react-techs-logos")).toBeTruthy()
  });
});
