import React, { useState } from 'react';
import { TextareaInput, TextAreaWrapper } from './Elements';
import { TextareaProps } from './TextareaTypes';

export const Textarea: React.FC<TextareaProps> = ({
  variant,
  width = 400,
  height = 100,
  padding = 10,
  placeholder,
  placeholderColor,
}): React.ReactElement => {
  const [inputHeight, setInputHeight] = useState<string>(`${height}px`);
  const [inputLength, setInputLength] = useState(0);

  const userInput = (e: any) => {
    setInputHeight('auto');
    setInputHeight(e.currentTarget.scrollHeight + 'px');
    if (!e.currentTarget.value || e.currentTarget.value) {
      console.log(inputLength);
      setInputLength(e.currentTarget.value.length);
    }
  };

  return (
    <TextAreaWrapper
      inputHeight={inputLength === 0 ? `${height}px` : inputHeight}
      width={width}
      variant={variant}
      padding={padding}>
      <TextareaInput
        inputHeight={inputHeight}
        onInput={(e) => userInput(e)}
        placeholderColor={placeholderColor}
        placeholder={placeholder}
      />
    </TextAreaWrapper>
  );
};
