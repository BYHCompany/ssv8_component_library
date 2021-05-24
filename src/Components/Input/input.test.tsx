import '@testing-library/jest-dom/extend-expect';
import { Input } from './Input';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const value = 'some value';
const placeholder = 'Please input value';

const RenderInput = () => {
  return render(<Input placeholder={placeholder} onChange={() => {}} value={value} />);
};

describe('Input', () => {
  it('should display input component', () => {
    const { getByRole } = RenderInput();
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('input shows right placeholder', () => {
    const { getByPlaceholderText } = RenderInput();
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('input shows right value from user', () => {
    const { getByPlaceholderText } = RenderInput();
    userEvent.type(getByPlaceholderText(placeholder), value);
    const filledInput = screen.getByDisplayValue(value);
    expect(filledInput).toBeInTheDocument();
  });
});
