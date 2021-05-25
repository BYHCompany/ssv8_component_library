import styled from 'styled-components';
import { Props } from './buttonTypes';

export const ButtonTag = styled.button<Props>`
  cursor: pointer;
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  border: none;
  border-style: none;
  background: ${({ variant, disabled }) =>
    (disabled && '#EBEBEB') ||
    (variant === 'primary' && '#072832') ||
    (variant === 'secondary' && '#fff') ||
    (variant === 'default' && '#EBEBEB')};

  color: ${({ variant, disabled }) =>
    (disabled && '#8C8C8C') ||
    (variant === 'primary' && '#fff') ||
    (variant === 'secondary' && '#072832') ||
    (variant === 'default' && '#8C8C8C')};

  padding: ${({ paddingHorizontal, paddingVertical }) =>
    `${paddingVertical}px ${paddingHorizontal}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  box-shadow: ${({ shadow }) => (shadow ? '0px 4px 0px rgba(0, 0, 0, .25)' : null)};

  height: ${({ height }) => `${height}px`};
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : `${width}px`)};
  transition: 0.15s ease-in-out;

  &:hover {
    background: ${({ variant, disabled }) =>
      (disabled && null) ||
      (variant === 'primary' && '#184c5c') ||
      (variant === 'secondary' && '#EBEBEB') ||
      (variant === 'default' && null)};
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const LabelWrap = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
`;

export const ButtonContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
