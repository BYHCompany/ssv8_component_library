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
    { label: '2021', id: 'akldj;la' },
    { label: '2020', id: 'akldj;laasdfa' },
    { label: '2019', id: 'akldj12s' },
    { label: '2018', id: 'aklacz12s' },
    { label: '2017', id: 'aklaczmma' },
    { label: '2016', id: 'akla12xxx' },
  ],
  height: 49,
  width: 546,
  fontSize: 24,
  defVariant: 'secondary',
};
export const Default = Template.bind({});
Default.args = {
  buttons: [
    { label: 'Левый', value: 'left', id: 'aklsadadsxx' },
    { label: 'Правый', value: 'right', id: 'akldmcc' },
  ],
  height: 50,
  width: 500,
  fontSize: 24,
  defVariant: 'default',
};
