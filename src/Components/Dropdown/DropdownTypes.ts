type Variant = 'primary' | 'secondary' | 'default';
export type ItemType = {
  label: string;
  id: string;
  value: any;
};
export interface DropdownProps {
  label: string;
  width?: number;
  height?: number;
  variant?: Variant;
  labelFontSize?: number;
  itemsFontSize?: number;
  padding?: number;
  items: ItemType[];
  callback: (item: ItemType) => void;
}

export interface LabelProps {
  children: React.ReactNode;
  onClick: () => void;
  height: number;
  width: number;
  labelFontSize: number;
  padding: number;
  variant: Variant;
  isChosenElem: boolean;
}

export interface DIVProps extends React.ComponentPropsWithoutRef<'div'> {
  width: number;
}

export interface LiProps extends React.ComponentPropsWithoutRef<'li'> {
  lastElement: boolean;
  height: number;
  itemsFontSize: number;
  padding: number;
  variant: Variant;
}

export interface LabelDivProps extends React.ComponentPropsWithoutRef<'div'> {
  height: number;
  labelFontSize: number;
  padding: number;
  variant: Variant;
  isChosenElem: boolean;
}