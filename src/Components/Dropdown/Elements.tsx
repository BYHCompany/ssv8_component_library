import styled from 'styled-components';
import { DIVProps, LabelDivProps, LiProps } from './DropdownTypes';

export const DIV = styled.div<DIVProps>`
  width: ${({ width }) => `${width}px`};
`;

export const LabelDiv = styled.div<LabelDivProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: ${({ height }) => `${height}px`};
  color: ${({ variant, isChosenElem }) =>
    isChosenElem
      ? (variant === 'default' && '#000000') ||
        (variant === 'primary' && '#ffffff') ||
        (variant === 'secondary' && '#000000')
      : (variant === 'default' && '#8C8C8C') ||
        (variant === 'primary' && '#ffffff') ||
        (variant === 'secondary' && '#8C8C8C')};
  background-color: ${({ variant }) =>
    (variant === 'default' && '#ffffff') ||
    (variant === 'primary' && '#072832') ||
    (variant === 'secondary' && 'rgba(255,255,255,0.5)')};
  align-items: center;
  padding: ${({ padding }) => `${padding}px`};
  margin-bottom: 2px;
  border-radius: 3px 3px 0 0;
  font-size: ${({ labelFontSize }) => `${labelFontSize}px`};
  font-weight: 700;
  cursor: pointer;
`;

export const UL = styled.ul`
  list-style: none;
`;

export const Item = styled.li<LiProps>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  background-color: #efefef;
  font-size: ${({ itemsFontSize }) => `${itemsFontSize}px`};
  display: flex;
  align-items: center;
  padding: ${({ padding }) => `${padding}px`};
  margin-bottom: 2px;
  border-radius: ${({ lastElement }) => lastElement && '0 0 3px 3px'};
  cursor: pointer;
`;
