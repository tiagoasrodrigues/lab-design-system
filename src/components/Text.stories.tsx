import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem Ipsum',
    size: 'md'
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponents: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Testando tag parágrafo </p>
    )
  }
}