export type ListContent = {
  name: string;
  id: string;
};

export interface ListProps {
  list: ListContent[];
  callback: (item: ListContent) => void;
  fontSize?: number;
}

export interface ListItemProps extends React.ComponentPropsWithoutRef<'li'> {
  fontWeight?: number;
}

export interface ListItemWrapProps extends React.ComponentPropsWithoutRef<'div'> {
  fontSize?: number;
}
export interface ArrowIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  fontSize?: number;
}
