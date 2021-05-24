import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input } from './Input';
import { AiFillHome } from 'react-icons/ai';
import { InputProps } from './inputTypes';

export default {
  title: 'FormControls/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Default',
  variant: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Primary',
  startIcon: <AiFillHome />,
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: 'Secondary',
  endIcon: <AiFillHome />,
  variant: 'secondary',
};
