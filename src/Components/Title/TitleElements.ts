import styled from 'styled-components';
import { TitleWrapperPros } from './titleType';

export const TextWrapper = styled.div<TitleWrapperPros>`
  color: ${({ variant }) =>
    (variant === 'primary' && '#072832') ||
    (variant === 'secondary' && '#fff') ||
    (variant === 'default' && '#8C8C8C')};
  font-size: ${({ type }) =>
    (type === 'ultraSmall' && '24px') ||
    (type === 'small' && '30px') ||
    (type === 'medium' && '36px') ||
    (type === 'large' && '48px') ||
    (type === 'ultraLarge' && '60px')};
`;
