export interface TitleProps {
  /**
   *Text for the title
   */
  text: string;
  /**
   *There are sizes which you can take, but also you can write your own
   */
  type?: 'ultraSmall' | 'small' | 'medium' | 'large' | 'ultraLarge';

  /**
   *Color for the title. You can write your own color
   */
  variant?: 'primary' | 'secondary' | 'default';
}

export interface TitleWrapperPros extends React.ComponentPropsWithoutRef<'div'> {
  type: 'ultraSmall' | 'small' | 'medium' | 'large' | 'ultraLarge';
  variant: 'primary' | 'secondary' | 'default';
}
