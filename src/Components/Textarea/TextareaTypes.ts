export interface TextareaProps {
  variant: 'primary' | 'default';
  width: number;
  height: number;
  padding: number;
  placeholderColor: string;
  placeholder: string;
}

export interface TextAreaWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  variant: 'primary' | 'default';
  padding: number;
  width: number;
  inputHeight: string;
}

export interface TextareaInputProps extends React.ComponentPropsWithoutRef<'textarea'> {
  placeholderColor: string;
  inputHeight: string;
}
