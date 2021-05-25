import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  it('onClick event should be called ', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick} variants={'primary'} label={'Hello'} />);
    const button = getByRole('button');
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
