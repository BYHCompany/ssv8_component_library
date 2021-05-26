export interface ButtonProps {
  /**
   *Right and Left Padding of button.
   */
  paddingHorizontal?: number;
  /**
   *Top and Bottom Padding of button.
   */
  paddingVertical?: number;
  /**
   *Font Size of button. Increasing/decreasing Icon and Font.
   */
  fontSize?: number;
  /**
   *3 way of coloring button:  primary or secondary and default;
   */
  variants?: 'primary' | 'secondary' | 'default';
  /**
   *Icon for the start of a button. Request ReactNode => Icon (for example React Icon, Material Icon)
   */
  startIcon?: React.ReactNode;
  /**
   *Icon for the end of a button. Request ReactNode => Icon (for example React Icon, Material Icon)
   */
  endIcon?: React.ReactNode;
  /**
   *Shadow of a button.
   */
  shadow?: boolean;
  /**
   *Main text of a button.
   */
  label: string;
  /**
   *Height of a button.
   */
  height?: number;
  /**
   *Width of a button.
   */
  width?: number;

  /**
   *Disabled design
   */
  disabled?: boolean;

  /**
   *Full width button;
   */
  fullWidth?: boolean;

  /**
   *Expected string like in default css (border-radius: 3px)
   */
  borderRadius?: any;
  /**
   *Any onClicks event
   */
  onClick?: any;
}

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variants?: 'primary' | 'secondary' | 'default';
  paddingHorizontal?: number;
  paddingVertical?: number;
  fontSize?: number;
  shadow?: boolean;
  height?: number;
  width?: number;
  onClick?: any;
  fullWidth?: boolean;
  disabled?: boolean;
  borderRadius?: any;
}
