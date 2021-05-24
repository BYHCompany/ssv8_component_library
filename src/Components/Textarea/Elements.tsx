import styled from 'styled-components';
import { TextareaInputProps, TextAreaWrapperProps } from './TextareaTypes';

export const TextAreaWrapper = styled.div<TextAreaWrapperProps>`
  display: flex;
  max-width: ${({ width }) => `${width}px`};
  max-height: ${({ inputHeight, padding }) => `${inputHeight + padding}px`};
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => `${padding}px`};
  background-color: ${({ variant }) =>
    (variant === 'default' && '#EBEBEB') || (variant === 'primary' && 'rgba(255,255,255,0.5)')};
`;

export const TextareaInput = styled.textarea<TextareaInputProps>`
  resize: none;
  height: ${({ inputHeight }) => inputHeight};
  width: 100%;
  display: flex;
  background-color: transparent;
  outline: none;
  border: none;

  &::placeholder {
    color: ${({ placeholderColor }) => (placeholderColor ? placeholderColor : '#8C8C8C')};
    opacity: 1;
  }
`;
