import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { ItemType, DropdownProps } from './DropdownTypes';
import { render } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown menu', () => {
  const array = [
    { label: 'Латвия', id: '1231', value: 'LV' },
    { label: 'Литва', id: '1232', value: 'LT' },
    { label: 'Эстония', id: '1233', value: 'EST' },
    { label: 'Россия', id: '1234', value: 'RU' },
    { label: 'Германия', id: '1235', value: 'GE' },
    { label: 'Польша', id: '1236', value: 'PL' },
    { label: 'Нидерланды', id: '1237', value: 'NL' },
    { label: 'Испания', id: '1238', value: 'SP' },
  ] as ItemType[];

  const renderDropdown = (args: DropdownProps) => render(<Dropdown {...args} />);

  const mockedFn = jest.fn();
  it('Dropdown should be in the document', () => {
    const { getByText } = renderDropdown({
      items: array,
      callback: mockedFn,
      label: 'Test label',
    });
    expect(getByText('Test label')).toBeInTheDocument();
  });
});
