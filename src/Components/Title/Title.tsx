import React from 'react';
import { TextWrapper } from './TitleElements';
import { TitleProps } from './titleType';

export const Title: React.FC<TitleProps> = ({
  variant = 'primary',
  text = 'text',
  type = 'small',
  ...props
}) => {
  return (
    <TextWrapper {...props} variant={variant} type={type}>
      {(type === 'ultraSmall' && <h5 data-testid="h5">{text}</h5>) ||
        (type === 'small' && <h4>{text}</h4>) ||
        (type === 'medium' && <h3>{text}</h3>) ||
        (type === 'large' && <h2>{text}</h2>) ||
        (type === 'ultraLarge' && <h1>{text}</h1>)}
    </TextWrapper>
  );
};
