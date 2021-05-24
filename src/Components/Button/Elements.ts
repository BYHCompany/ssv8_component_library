import styled from 'styled-components';
import { Props } from './buttonTypes';

export const ButtonTag = styled.button<Props>`
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  border-style: none;
  background: ${({ variants, disabled }) =>
    (disabled && '#EBEBEB') ||
    (variants === 'primary' && '#072832') ||
    (variants === 'secondary' && '#fff') ||
    (variants === 'default' && '#EBEBEB')};

  color: ${({ variants, disabled }) =>
    (disabled && '#8C8C8C') ||
    (variants === 'primary' && '#fff') ||
    (variants === 'secondary' && '#072832') ||
    (variants === 'default' && '#8C8C8C')};

  padding: ${({ paddingHorizontal, paddingVertical }) =>
    `${paddingVertical}px ${paddingHorizontal}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  box-shadow: ${({ shadow }) => (shadow ? '0px 4px 0px rgba(0, 0, 0, .25)' : null)};
  height: ${({ height }) => `${height}px`};
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : `${width}px`)};
  transition: 0.15s ease-in-out;

  &:hover {
    background: ${({ variants, disabled }) =>
      (disabled && null) ||
      (variants === 'primary' && '#184c5c') ||
      (variants === 'secondary' && '#EBEBEB') ||
      (variants === 'default' && null)};
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const LabelWrap = styled.div`
  padding: 0px 10px;
`;

export const ButtonContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
