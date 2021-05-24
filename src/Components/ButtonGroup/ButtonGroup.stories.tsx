import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupProps } from './buttonGroupType';

export default {
  title: 'Common/ButtonGroup',
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttons: [
    { label: 'Левый', id: '1' },
    { label: 'Правый', id: '2' },
  ],
  height: 60,
  width: 500,
  fontSize: 18,
};
