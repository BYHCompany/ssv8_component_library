import React from 'react';
import { ButtonProps } from './buttonTypes';
import { ButtonContent, ButtonTag, ContentWrap, LabelWrap } from './Elements';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (
  {
    paddingHorizontal,
    paddingVertical,
    variant,
    startIcon,
    endIcon,
    label,
    fontSize,
    shadow,
    height,
    width,
    disabled,
    fullWidth,
    onClick,
    borderRadius = '3px',
    customBgColor,
    customFontColor,
    iconColor,
    tag,
  },
  ...props
) => {
  return (
    <div>
      <ButtonTag
        onClick={onClick}
        height={height}
        customBgColor={customBgColor}
        customFontColor={customFontColor}
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
        {tag ? (
          <ButtonContent>
            <ContentWrap data-testid="icon-wrapper" iconColor={iconColor}>
              {' '}
              {startIcon}{' '}
            </ContentWrap>
          </ButtonContent>
        ) : startIcon || endIcon ? (
          <ButtonContent>
            <ContentWrap iconColor={iconColor} data-testid="startIcon">
              {startIcon}
            </ContentWrap>
            <LabelWrap>{label}</LabelWrap>
            <ContentWrap iconColor={iconColor} data-testid="endIcon">
              {endIcon}
            </ContentWrap>
          </ButtonContent>
        ) : (
          <ButtonContent>
            <LabelWrap data-testid="labelTest">{label} </LabelWrap>
          </ButtonContent>
        )}
      </ButtonTag>
    </div>
  );
};
