import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import {TextInput, TextInputRootProps} from './TextInput';

export default {
	title: 'Componets/TextInput',
	component: TextInput.Root,
	args: {

		children: (
			// poderia usar tb o fragment do React para deixar os dois componentes juntos <> </>
			[
				<TextInput.Icon>
					<Envelope/>
				</TextInput.Icon>,
				<TextInput.Input placeholder='type your email address' type='email' />
			]
		),

	},
	argTypes: {
        children: {
            table: {
				disable: true,
			}
		},
	},
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {};

export const WhithoutIcon: StoryObj<TextInputRootProps> = {
	args: {
		children: <TextInput.Input placeholder='type your email address' type='email' />
	}
};
