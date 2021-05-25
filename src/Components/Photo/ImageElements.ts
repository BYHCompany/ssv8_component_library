import styled from 'styled-components';

export const ImageTag = styled.img`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  border-radius: 3px;
`;
