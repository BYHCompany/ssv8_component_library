import React, { useState } from 'react';
import { DIV, Item, LabelDiv, UL } from './Elements';
import { IoIosArrowDown } from 'react-icons/io';
import { DropdownProps, LabelProps } from './DropdownTypes';
import { ItemType } from './DropdownTypes';

const Label: React.FC<LabelProps> = ({
  children,
  onClick,
  padding,
  height,
  labelFontSize,
  variant,
  isChosenElem,
}) => {
  return (
    <LabelDiv
      isChosenElem={isChosenElem}
      variant={variant}
      labelFontSize={labelFontSize}
      height={height}
      padding={padding}
      onClick={onClick}>
      {children}
    </LabelDiv>
  );
};

//TODO

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  height = 40,
  width = 280,
  items,
  itemsFontSize = 14,
  labelFontSize = 14,
  padding = 10,
  variant = 'default',
  callback,
}) => {
  const [visible, setVisible] = useState(false);
  const [currentElem, setCurrentElem] = useState<string>();
  let i = 0;

  const noneObj = {
    id: 'none',
    label: 'none',
    value: 'none',
  } as ItemType;

  const handleClick = () => setVisible(!visible);

  const itemClick = (item: ItemType) => {
    setCurrentElem(item.label);
    setVisible(false);
    callback && callback(item);
  };

  const setNoneItem = () => {
    setCurrentElem(label);
    setVisible(false);
    callback && callback(noneObj);
  };

  return (
    <DIV width={width}>
      <Label
        variant={variant}
        padding={padding}
        labelFontSize={labelFontSize}
        height={height}
        width={width}
        isChosenElem={currentElem ? true : false}
        onClick={handleClick}>
        {currentElem ? currentElem : label}
        <IoIosArrowDown />
      </Label>
      {visible && (
        <aside>
          <UL>
            <Item
              variant={variant}
              onClick={() => setNoneItem()}
              value={'none'}
              padding={padding}
              itemsFontSize={itemsFontSize}
              height={height}
              lastElement={false}
              key={'universalKeyforDeffaultItem287346'}>
              ---
            </Item>
            {items.map((item: any) => {
              i++;
              return (
                <Item
                  variant={variant}
                  onClick={() => itemClick(item)}
                  value={item.value}
                  padding={padding}
                  itemsFontSize={itemsFontSize}
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
