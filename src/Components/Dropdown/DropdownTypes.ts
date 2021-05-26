type Variant = 'primary' | 'secondary' | 'default';
export type ItemType = {
  label: string;
  id: string;
  value: any;
};

export interface DropdownProps {
  label: string;
  width: number;
  height: number;
  variant: Variant;
  labelFontSize: number;
  itemsFontSize: number;
  padding: number;
  items: ItemType[];
}

export interface LabelProps {
  children: React.ReactNode;
  onClick: () => void;
  height: number;
  width: number;
  labelFontSize: number;
  padding: number;
}

export interface LiProps extends React.ComponentPropsWithoutRef<'li'> {
  lastElement: boolean;
  height: number;
  width: number;
  itemsFontSize: number;
  padding: number;
}

export interface LabelDivProps extends React.ComponentPropsWithoutRef<'div'> {
  padding: number;
}
