import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ImageComponent } from './Image';

describe('Image', () => {
  const ImageTest = () => {
    const img =
      'https://images.unsplash.com/photo-1621570359159-72e496ab7d7b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80';
    return render(<ImageComponent alt="photo" height={500} width={300} src={img} />);
  };
  const getImage = () => {
    const { getByRole } = ImageTest();
    const image = getByRole('img');
    return image;
  };
  it('image should render in the document', () => {
    const image = getImage();
    expect(image).toBeInTheDocument();
  });
  it('height of image should be 500px', () => {
    const image = getImage();
    expect(image).toHaveStyle({
      height: '500px',
    });
  });
  it('width of image should be 300px', () => {
    const image = getImage();
    expect(image).toHaveStyle({
      width: '300px',
    });
  });
});
