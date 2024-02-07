import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import ReactTechsLogos from './index';

describe('Should render <ReactTechsLogos/>', () => {
  beforeEach(() => {
    render(<ReactTechsLogos />);
  });
  it('renders simple ReactTechsLogos', () => {
    expect(screen.getByTestId('techs-container')).toBeInTheDocument()
  });
});

describe('Should render list techs', () => {
  beforeEach(() => {
    render(<ReactTechsLogos list={['vue','javascript', 'react', 'angular']} />);
  });
  it('renders simple ReactTechsLogos hiddenLogos', () => {
    expect(screen.getByTestId('techs-container-list')).toBeInTheDocument()
  });
});

describe('Should render hiddenLogos', () => {
  beforeEach(() => {
    render(<ReactTechsLogos hiddenLogos={['vue','javascript', 'react', 'angular', 'android']} />);
  });
  it('renders simple ReactTechsLogos hiddenLogos', () => {
    expect(screen.getByTestId('techs-container-hiddenLogos')).toBeInTheDocument()
  });
});

