import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from './Title';
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
  it('text in title should be Hello', () => {
    const { getByText } = render(<Title text={'Hello'} />);
    expect(getByText('Hello')).toBeInTheDocument();
  });
  it('title should be exist in the document', () => {
    const { getByRole } = render(<Title text={'Hello'} />);
    expect(getByRole('heading')).toBeInTheDocument();
  });
});
