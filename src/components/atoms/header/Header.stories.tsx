import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Atoms/Header',
  component: Header,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum',
    font: 'secondaryBold',
    tag: 'h1',
    prominent: false,
    srOnly: false
  }
};

export const PrimaryH1: Story = {
  render: () => (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <Header tag='h1' font='primary'>
        Lorem Ipsum
      </Header>
      <Header tag='h2' font='primary'>
        Lorem Ipsum
      </Header>
      <Header tag='h3' font='primary'>
        Lorem Ipsum
      </Header>
      <Header tag='h4' font='primary'>
        Lorem Ipsum
      </Header>
      <Header tag='h5' font='primary'>
        Lorem Ipsum
      </Header>
      <Header tag='h6' font='primary'>
        Lorem Ipsum
      </Header>
    </div>
  )
};

export const SecondaryH1: Story = {
  render: () => (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <Header tag='h1' font='secondary'>
        Lorem Ipsum
      </Header>
      <Header tag='h2' font='secondary'>
        Lorem Ipsum
      </Header>
      <Header tag='h3' font='secondary'>
        Lorem Ipsum
      </Header>
      <Header tag='h4' font='secondary'>
        Lorem Ipsum
      </Header>
      <Header tag='h5' font='secondary'>
        Lorem Ipsum
      </Header>
      <Header tag='h6' font='secondary'>
        Lorem Ipsum
      </Header>
    </div>
  )
};

export const SecondaryH1Bold: Story = {
  render: () => (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <Header tag='h1' font='secondaryBold'>
        Lorem Ipsum
      </Header>
      <Header tag='h2' font='secondaryBold'>
        Lorem Ipsum
      </Header>
      <Header tag='h3' font='secondaryBold'>
        Lorem Ipsum
      </Header>
      <Header tag='h4' font='secondaryBold'>
        Lorem Ipsum
      </Header>
      <Header tag='h5' font='secondaryBold'>
        Lorem Ipsum
      </Header>
      <Header tag='h6' font='secondaryBold'>
        Lorem Ipsum
      </Header>
    </div>
  )
};

export const CustomColor: Story = {
  args: {
    children: 'Lorem ipsum',
    font: 'secondaryBold',
    tag: 'h1',
    prominent: false,
    srOnly: false,
    className: 'text-pink dark:text-pink'
  }
};
