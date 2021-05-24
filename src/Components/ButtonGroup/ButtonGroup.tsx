import React from 'react';
import { ButtonGroupWrapper } from './ButtonGroupElement';
import { ButtonGroupProps } from './buttonGroupType';
import { Button } from '../Button/Button';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, height, width, fontSize }) => {
  const [clicked, setClicked] = React.useState<string>();
  let calcButtonWidth = width / buttons.length;
  return (
    <ButtonGroupWrapper height={height} width={width}>
      {buttons.map((button) => (
        <React.Fragment key={button.id}>
          <Button
            width={calcButtonWidth}
            height={height}
            fontSize={fontSize}
            onClick={() => setClicked(button.id)}
            label={button.label}
            endIcon={button.endIcon}
            startIcon={button.startIcon}
            variants={clicked === button.id ? 'primary' : 'default'}
          />
        </React.Fragment>
      ))}
    </ButtonGroupWrapper>
  );
};
