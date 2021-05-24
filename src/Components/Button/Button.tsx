import React from 'react';
import { ButtonProps } from './buttonTypes';
import { ButtonContent, ButtonTag, ContentWrap, LabelWrap } from './Elements';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  paddingHorizontal = 30,
  paddingVertical = 15,
  variants,
  startIcon,
  endIcon,
  label = 'Button',
  fontSize = 22,
  shadow,
  height = 50,
  width = 300,
  disabled,
  fullWidth,
  onClick,
  ...props
}) => {
  return (
    <div>
      <ButtonTag
        onClick={onClick}
        height={height}
        width={width}
        fontSize={fontSize}
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
        variants={variants}
        shadow={shadow}
        disabled={disabled}
        fullWidth={fullWidth}
        {...props}>
        {startIcon || endIcon ? (
          <ButtonContent>
            <ContentWrap>{startIcon}</ContentWrap> <LabelWrap>{label}</LabelWrap>
            <ContentWrap> {endIcon}</ContentWrap>
          </ButtonContent>
        ) : (
          <ButtonContent>
            <LabelWrap>{label} </LabelWrap>
          </ButtonContent>
        )}
      </ButtonTag>
    </div>
  );
};
