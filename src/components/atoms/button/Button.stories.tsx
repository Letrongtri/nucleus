import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<object> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger']
    },
    disabled: {
      control: 'boolean'
    },
    children: {
      control: 'text'
    },
    onClick: { action: 'clicked' }
  }
};

export default meta;

type Story = StoryObj<object>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true
  }
};
