import { Meta, StoryObj } from '@storybook/react'
import {Button, ButtonProps} from './Button';

export default {
	title: 'Componets/Button',
	component: Button,
	args: {
		children:'Click Here'
	},
	argTypes: {
        children: {
            control: {}
		}
	},
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {};
