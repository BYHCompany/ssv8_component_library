export type buttonDif = {
  label: string;
  id: string;
  startIcon?: string;
  endIcon?: string;
};

export type ButtonGroupProps = {
  buttons: Array<buttonDif>;
  width: number;
  height: number;
  fontSize: number;
};

export interface ButtonWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  width: number;
  height: number;
}
