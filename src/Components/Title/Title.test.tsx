import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from './Title';
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
  const getTitle = () => {
    return render(<Title text={'Hello'} type="ultraSmall" />);
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
    const { getByTestId } = getTitle();
    expect(getByTestId('h5')).toBeInTheDocument();
  });
});
