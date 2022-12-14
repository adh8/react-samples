import { Meta, StoryObj } from '@storybook/react'
import {Heading, HeadingProps} from './Heading';

export default {
	title: 'Componets/Heading',
	component: Heading,
	args: {
		children:'loren ipsum dolor sit amet'
	},
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
	args: {
		size: 'small'
	},
};

export const Large: StoryObj<HeadingProps> = {
	args: {
		size: 'large'
	},
};

export const CustomComponent: StoryObj<HeadingProps> = {
	args: {
		asChild: true,
		children: (
			<h1>Heading with H1</h1>
		)
	},
};