import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './index';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { ButtonProps } from './buttonTypes';

export default {
  title: 'Common/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variants: 'primary',
  label: 'Primary Button',
  paddingHorizontal: 30,
  paddingVertical: 15,
  fontSize: 20,
  startIcon: <BsFillHouseDoorFill />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variants: 'secondary',
  paddingHorizontal: 25,
  paddingVertical: 15,
  fontSize: 20,
  endIcon: <BsFillHouseDoorFill />,
};
