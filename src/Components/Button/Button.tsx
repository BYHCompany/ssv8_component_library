import React from 'react';
import { ButtonProps } from './buttonTypes';
import { ButtonContent, ButtonTag, ContentWrap, LabelWrap } from './Elements';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (
  {
    paddingHorizontal = 30,
    paddingVertical = 15,
    variant,
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
    borderRadius = '3px',
  },
  ...props
) => {
  return (
    <div>
      <ButtonTag
        onClick={onClick}
        height={height}
        width={width}
        fontSize={fontSize}
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
        variant={variant}
        shadow={shadow}
        disabled={disabled}
        fullWidth={fullWidth}
        borderRadius={borderRadius}
        {...props}>
        {startIcon || endIcon ? (
          <ButtonContent>
            <ContentWrap data-testid="startIcon">{startIcon}</ContentWrap>{' '}
            <LabelWrap>{label}</LabelWrap>
            <ContentWrap data-testid="endIcon"> {endIcon}</ContentWrap>
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
