import styled from 'styled-components';
import { PhotoWrapperProp } from './imageType';

export const ImageTag = styled.img`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  border-radius: 3px;
`;
