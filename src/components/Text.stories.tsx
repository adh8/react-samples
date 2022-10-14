import { Meta, StoryObj } from '@storybook/react'
import {Text, TextProps} from './Text';

export default {
	title: 'Componets/Text',
	component: Text,
	args: {
		children:'loren ipsum dolor sit amet'
	},
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
	args: {
		size: 'small'
	},
};

export const Large: StoryObj<TextProps> = {
	args: {
		size: 'large'
	},
};

export const CustomComponent: StoryObj<TextProps> = {
	args: {
		asChild: true,
		children: (
			<p>Testando...</p>
		)
	},
};