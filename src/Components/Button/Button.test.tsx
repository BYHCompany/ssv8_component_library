import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
  it('name of button should be Hello', () => {
    const { getByText } = render(<Button variants={'primary'} label={'Hello'} />);
    expect(getByText('Hello')).toBeInTheDocument();
  });
  it('button should be exist in the document', () => {
    const { getByRole } = render(<Button variants={'primary'} label={'Hello'} />);
    expect(getByRole('button')).toBeInTheDocument();
  });
});
