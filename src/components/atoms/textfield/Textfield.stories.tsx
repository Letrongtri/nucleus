import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Textfield from './Textfield';
import { TextfieldProps } from './Textfield.types';
const meta: Meta<TextfieldProps> = {
  title: 'Atoms/Textfield',
  component: Textfield,
  args: {
    label: 'Label',
    placeholder: 'Enter text',
    value: '',
    disabled: false,
    error: ''
  },
  argTypes: {
    onChange: { action: 'changed' }
  }
};

export default meta;

type Story = StoryObj<TextfieldProps>;

export const WithValue: Story = {
  args: {
    value: 'Hello world',
    onChange: (e) => console.log(e.target.value)
  }
};

// export const Disabled: Story = {
//     args: {
//         disabled: true,
//         value: 'Disabled',
//     },
// };

// export const Error: Story = {
//     args: {
//         error: 'This field is required',
//     },
// };
