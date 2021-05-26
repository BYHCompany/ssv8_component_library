export interface PhotoProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}
export interface PhotoWrapperProp extends React.ComponentPropsWithoutRef<'div'> {
  src: string;
  height: number;
  width: number;
}
