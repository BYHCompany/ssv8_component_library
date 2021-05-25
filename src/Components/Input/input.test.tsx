import '@testing-library/jest-dom/extend-expect';
import { Input } from './Input';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AiFillHome } from 'react-icons/ai';

const value = 'some value';
const placeholder = 'Please input value';

const renderInput = (isIconWrapperTransparent?: boolean) => {
  return render(
    <Input
      variant="primary"
      isIconWrapperTransparent={isIconWrapperTransparent}
      placeholder={placeholder}
      onChange={() => {}}
      value={value}
      startIcon={<AiFillHome />}
    />,
  );
};

describe('Input', () => {
  it('should display input component', () => {
    const { getByRole } = renderInput();
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('input should show right placeholder', () => {
    const { getByPlaceholderText } = renderInput();
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('input shows right value from user', () => {
    const { getByPlaceholderText } = renderInput();
    userEvent.type(getByPlaceholderText(placeholder), value);
    const filledInput = screen.getByDisplayValue(value);
    expect(filledInput).toBeInTheDocument();
  });
  it("input start icon's background color should be transparent", () => {
    const { getByTestId } = renderInput(true);
    expect(getByTestId('startIconWrapper')).toHaveStyle({ backgroundColor: 'transparent' });
  });
  it("input start icon's background color should NOT be transparent", () => {
    const { getByTestId } = renderInput(false);
    expect(getByTestId('startIconWrapper')).not.toHaveStyle({ backgroundColor: 'transparent' });
  });
});
