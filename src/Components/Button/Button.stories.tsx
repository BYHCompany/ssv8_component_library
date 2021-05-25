import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { ButtonProps } from './buttonTypes';

export default {
  title: 'Common/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary Button',
  paddingHorizontal: 30,
  paddingVertical: 15,
  fontSize: 20,
  startIcon: <BsFillHouseDoorFill />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  paddingHorizontal: 25,
  paddingVertical: 15,
  fontSize: 20,
  endIcon: <BsFillHouseDoorFill />,
};
export const WithOutIcons = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  paddingHorizontal: 25,
  paddingVertical: 15,
  fontSize: 20,
};
