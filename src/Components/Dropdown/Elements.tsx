import styled from 'styled-components';
import { LabelDivProps, LiProps } from './DropdownTypes';

export const DIV = styled.div`
  width: 280px;
`;

export const LabelDiv = styled.div<LabelDivProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 40px;
  background-color: #efefef;
  align-items: center;
  padding: ${({ padding }) => `${padding}px`};
  margin-bottom: 2px;
  border-radius: 3px 3px 0 0;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const UL = styled.ul`
  list-style: none;
`;

export const Item = styled.li<LiProps>`
  width: 100%;
  height: 40px;
  background-color: #efefef;
  display: flex;
  align-items: center;
  padding: ${({ padding }) => `${padding}px`};
  margin-bottom: 2px;
  border-radius: ${({ lastElement }) => lastElement && '0 0 3px 3px'};
`;
