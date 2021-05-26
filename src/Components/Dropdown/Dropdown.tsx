import React, { useState } from 'react';
import { DIV, Item, LabelDiv, UL } from './Elements';
import { IoIosArrowDown } from 'react-icons/io';
import { DropdownProps, LabelProps } from './DropdownTypes';
import { ItemType } from './DropdownTypes';

const array = [
  { label: 'Латвия', id: 1231 },
  { label: 'Литва', id: 1232 },
  { label: 'Эстония', id: 1233 },
  { label: 'Россия', id: 1234 },
  { label: 'Германия', id: 1235 },
  { label: 'Польша', id: 1236 },
  { label: 'Нидерланды', id: 1237 },
  { label: 'Испания', id: 1238 },
];

const Label: React.FC<LabelProps> = ({ children, onClick, padding }) => {
  return (
    <LabelDiv padding={padding} onClick={onClick}>
      {children}
    </LabelDiv>
  );
};

//TODO

export const Dropdown: React.FC<DropdownProps> = ({
  label = 'Default',
  height = 40,
  width = 280,
  items = array,
  itemsFontSize = 14,
  labelFontSize = 14,
  padding = 10,
  variant = 'default',
}) => {
  const [visible, setVisible] = useState(false);
  const [currentElem, setCurrentElem] = useState<string>();
  let i = 0;

  const handleClick = () => setVisible(!visible);

  const itemClick = (label: string) => {
    setCurrentElem(label);
    setVisible(false);
  };

  return (
    <DIV>
      <Label
        padding={padding}
        labelFontSize={labelFontSize}
        height={height}
        width={width}
        onClick={handleClick}>
        {currentElem ? currentElem : label}
        <IoIosArrowDown />
      </Label>
      {visible && (
        <aside>
          <UL>
            {items.map((item: any) => {
              i++;
              return (
                <Item
                  onClick={() => itemClick(item.label)}
                  value={item.value}
                  padding={padding}
                  itemsFontSize={itemsFontSize}
                  width={width}
                  height={height}
                  lastElement={items.length === i}
                  key={item.id}>
                  {item.label}
                </Item>
              );
            })}
          </UL>
        </aside>
      )}
    </DIV>
  );
};
