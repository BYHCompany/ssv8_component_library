import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Dropdown } from './Dropdown';
import { DropdownProps } from './DropdownTypes';

export default {
  title: 'FormControls/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {};
