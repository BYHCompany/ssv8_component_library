import React from 'react';
import { InputArea, InputField, InputContent, IconWrapper } from './Elements';
import { InputProps } from './inputTypes';

export const Input: React.FC<InputProps> = ({
  variant = 'default',
  placeholder = '',
  width = 280,
  height = 40,
  opacity = 1,
  paddingsHorizontal = 10,
  fontSize = 14,
  startIcon = null,
  endIcon = null,
  isIconWrapperTransparent = false,
  value,
  fullwidth = false,
  onChange,
  inputFieldProps,
  inputBlockProps,
}): React.ReactElement => {
  return (
    <InputArea
      fullwidth={fullwidth}
      variant={variant}
      width={width}
      opacity={opacity}
      height={height}
      {...inputBlockProps}>
      {startIcon || endIcon ? (
        <>
          {startIcon && (
            <IconWrapper
              data-testid="startIconWrapper"
              isIconWrapperTransparent={isIconWrapperTransparent}
              isOnStart
              height={height}>
              {startIcon}
            </IconWrapper>
          )}
          <InputContent paddingsHorizontal={paddingsHorizontal}>
            <InputField
              fullwidth={fullwidth}
              onChange={onChange}
              value={value}
              variant={variant}
              height={height}
              paddingsHorizontal={paddingsHorizontal}
              width={width}
              placeholder={placeholder}
              fontSize={fontSize}
              {...inputFieldProps}
            />
          </InputContent>
          {endIcon && (
            <IconWrapper
              data-testid="endIconWrapper"
              isIconWrapperTransparent={isIconWrapperTransparent}
              isOnStart={false}
              height={height}>
              {endIcon}
            </IconWrapper>
          )}
        </>
      ) : (
        <InputContent paddingsHorizontal={paddingsHorizontal}>
          <InputField
            fullwidth={fullwidth}
            onChange={onChange}
            value={value}
            variant={variant}
            paddingsHorizontal={paddingsHorizontal}
            height={height}
            width={width}
            placeholder={placeholder}
            fontSize={fontSize}
          />
        </InputContent>
      )}
    </InputArea>
  );
};
