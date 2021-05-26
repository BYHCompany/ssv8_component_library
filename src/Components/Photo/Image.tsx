import React from 'react';
import { ImageTag } from './ImageElements';
import { PhotoProps } from './imageType';

export const ImageComponent: React.FC<PhotoProps> = ({ src, alt, height, width }) => {
  return (
    <div>
      <ImageTag height={height} width={width} src={src} alt={alt} />
    </div>
  );
};
