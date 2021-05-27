import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Stepper } from './Stepper';
import { StepperElement, StepperProps } from './StepperTypes';

const doneItems: StepperElement[] = [
  { id: 'dsjhtfs67u', value: 'string' },
  { id: '2tarffuyewjk4', value: 'string' },
  { id: '348535j4hn578fsd', value: 'string' },
  { id: '12sdf', value: 'string' },
  { id: '13sdf', value: 'string' },
  { id: 'hfghfg465', value: 'string' },
  { id: 'gdfdfggfd', value: 'string' },
  { id: 'sffsd3456', value: 'string' },
];

const testArray: StepperElement[] = [
  { id: '11kkogfposbhjv3', value: 'string' },
  { id: '12sdf', value: 'string' },
  { id: '13sdf', value: 'string' },
  { id: '121233', value: 'string' },
  { id: '1456456fdsg', value: 'string' },
  { id: 'dgdfg2345', value: 'string' },
  { id: 'hfghfg465', value: 'string' },
  { id: 'gdfdfggfd', value: 'string' },
  { id: 'sffsd3456', value: 'string' },
  { id: '14kfgh2234', value: 'string' },
  { id: 's123adsffd', value: 'string' },
  { id: 'kjdfy876', value: 'string' },
  { id: 'dsjhtfs67u', value: 'string' },
  { id: '2tarffuyewjk4', value: 'string' },
  { id: '348535j4hn578fsd', value: 'string' },
];

export default {
  title: 'Common/Stepper',
  component: Stepper,
} as Meta;

const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  doneElements: doneItems,
  allElements: testArray,
};
