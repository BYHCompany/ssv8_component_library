import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from './Title';
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
  const getTitle = (type?: 'ultraSmall' | 'small' | 'medium' | 'large' | 'ultraLarge') => {
    return render(<Title text={'Hello'} type={type} />);
  };

  it('text in title should be Hello', () => {
    const { getByText } = getTitle();
    expect(getByText('Hello')).toBeInTheDocument();
  });
  it('title should be exist in the document', () => {
    const { getByRole } = getTitle();
    expect(getByRole('heading')).toBeInTheDocument();
  });
  it('title should be ultraSmall size', () => {
    const { getByTestId } = getTitle('ultraSmall');
    expect(getByTestId('h5')).toBeInTheDocument();
  });
  it('title should be small size', () => {
    const { getByTestId } = getTitle('small');
    expect(getByTestId('h4')).toBeInTheDocument();
  });
  it('title should be medium size', () => {
    const { getByTestId } = getTitle('medium');
    expect(getByTestId('h3')).toBeInTheDocument();
  });
  it('title should be large size', () => {
    const { getByTestId } = getTitle('large');
    expect(getByTestId('h2')).toBeInTheDocument();
  });
  it('title should be ultraLarge size', () => {
    const { getByTestId } = getTitle('ultraLarge');
    expect(getByTestId('h1')).toBeInTheDocument();
  });
});
