import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Textarea } from './Textarea';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Text area', () => {
  const placeholder = 'Placeholder';
  const value = 'some value in text area';
  const onInput = jest.fn();
  const padding = 20;

  const renderTextArea = (argValue: string) =>
    render(
      <Textarea
        width={500}
        height={100}
        placeholder={placeholder}
        value={argValue}
        onInput={onInput}
        fontSize={18}
        padding={padding}
      />,
    );

  it('Text area should be in the document', () => {
    const onInput = jest.fn();
    const { getByPlaceholderText } = renderTextArea(value);
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
  it('Text area should show right value', () => {
    const { getByDisplayValue } = renderTextArea(value);
    expect(getByDisplayValue(value)).toBeInTheDocument();
  });
  it('Text area should write and display right value', () => {
    const testValue = 'test TEST';
    const { getByRole } = renderTextArea('');
    const elem = getByRole('textbox');
    userEvent.type(elem, testValue);
    expect(elem).toHaveValue(testValue);
  });
  it('Text area should be with right width', () => {
    const { getByTestId } = renderTextArea(value);
    expect(getByTestId('textAreaWrapper')).toHaveStyle({ maxWidth: '500px' });
  });
  it('Text area should be with right height', () => {
    const { getByTestId } = renderTextArea(value);
    expect(getByTestId('textAreaWrapper')).toHaveStyle({ height: '100px' });
  });
  it('Text area should be with right font size', () => {
    const { getByRole } = renderTextArea(value);
    expect(getByRole('textbox')).toHaveStyle({ fontSize: '18px' });
  });
});
