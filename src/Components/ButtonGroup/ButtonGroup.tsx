import React from 'react';
import { ButtonGroupWrapper } from './ButtonGroupElement';
import { ButtonGroupProps } from './buttonGroupType';
import { Button } from '../Button/Button';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  height,
  width,
  fontSize,
  defVariant = 'default',
  callback,
}) => {
  const [clicked, setClicked] = React.useState<string>();
  const [stateLabel, setStateLabel] = React.useState<string>('');
  let calcButtonWidth = width / buttons.length;
  const firstElement = buttons.indexOf(buttons[0]) + 1;
  const lastElement = buttons.indexOf(buttons[buttons.length - 1]) + 1;
  let i: number = 0;

  const handleClick = (label: string, id: string, value?: string) => {
    value ? setStateLabel(value) : setStateLabel(label);
    setClicked(id);
    callback(stateLabel);
  };

  return (
    <ButtonGroupWrapper data-testid="buttonGroupWrapper" height={height} width={width}>
      {buttons.map((button) => {
        i++;
        return (
          <React.Fragment key={button.id}>
            <Button
              borderRadius={
                (firstElement === i && '3px 0 0 3px') || (lastElement === i && '0 3px 3px 0')
              }
              width={calcButtonWidth}
              height={height}
              fontSize={fontSize}
              onClick={() => handleClick(button.label, button.id, button.value)}
              label={button.label}
              endIcon={button.endIcon}
              startIcon={button.startIcon}
              variant={clicked === button.id ? 'primary' : defVariant}
            />
          </React.Fragment>
        );
      })}
    </ButtonGroupWrapper>
  );
};
