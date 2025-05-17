import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'primary',
    rounded: false,
    shadow: true,
    uppercase: true,
    size: 'md',
    text: 'Lorem ipsum',
    type: 'button',
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    ariaLabel: '',
    onClick: action('Clicked')
  }
};

export const Primary: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Button size='sm' onClick={action('clicked')} />
      <Button size='md' onClick={action('clicked')} />
      <Button size='lg' onClick={action('clicked')} />
    </div>
  )
};

export const Secondary: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Button size='sm' variant='secondary' onClick={action('clicked')} />
      <Button size='md' variant='secondary' onClick={action('clicked')} />
      <Button size='lg' variant='secondary' onClick={action('clicked')} />
    </div>
  )
};

export const Outlined: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Button size='sm' variant='outlined' onClick={action('clicked')} />
      <Button size='md' variant='outlined' onClick={action('clicked')} />
      <Button size='lg' variant='outlined' onClick={action('clicked')} />
    </div>
  )
};

export const Ghost: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Button size='sm' variant='ghost' onClick={action('clicked')} />
      <Button size='md' variant='ghost' onClick={action('clicked')} />
      <Button size='lg' variant='ghost' onClick={action('clicked')} />
    </div>
  )
};

export const Light: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Button size='sm' variant='light' onClick={action('clicked')} />
      <Button size='md' variant='light' onClick={action('clicked')} />
      <Button size='lg' variant='light' onClick={action('clicked')} />
    </div>
  )
};

export const Loading: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Button size='md' variant='primary' isLoading={true} onClick={action('clicked')} />
      <Button size='md' variant='secondary' isLoading={true} onClick={action('clicked')} />
      <Button size='md' variant='outlined' isLoading={true} onClick={action('clicked')} />
    </div>
  )
};

export const WithIcon: Story = {
  render: () => (
    <>
      <div className='flex gap-4 items-center justify-center'>
        <Button size='md' variant='primary' icon='image' onClick={action('clicked')} />
        <Button size='md' variant='outlined' icon='image' onClick={action('clicked')} />
        <Button size='md' variant='light' icon='image' onClick={action('clicked')} />
      </div>
      <div className='flex gap-4 items-center justify-center pt-4'>
        <Button size='md' variant='secondary' icon='image' onClick={action('clicked')} />
        <Button size='md' variant='ghost' icon='image' onClick={action('clicked')} />
      </div>
    </>
  )
};

export const Rounded: Story = {
  render: () => (
    <>
      <div className='flex gap-4 items-center justify-center'>
        <Button size='md' variant='primary' rounded={true} onClick={action('clicked')} />
        <Button size='md' variant='outlined' rounded={true} onClick={action('clicked')} />
        <Button size='md' variant='light' rounded={true} onClick={action('clicked')} />
      </div>
      <div className='flex gap-4 items-center justify-center pt-4'>
        <Button size='md' variant='secondary' rounded={true} onClick={action('clicked')} />
        <Button size='md' variant='ghost' rounded={true} onClick={action('clicked')} />
      </div>
    </>
  )
};

export const CustomStyles: Story = {
  args: {
    variant: 'primary',
    rounded: false,
    shadow: true,
    uppercase: true,
    size: 'md',
    text: 'Lorem ipsum',
    type: 'button',
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    ariaLabel: '',
    icon: 'arrow-right',
    className: '!flex-row-reverse'
  }
};
