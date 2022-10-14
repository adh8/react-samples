import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
	children: ReactNode;
	asChild: boolean;
}

export function Button({ children, asChild }: ButtonProps) {

	const ComponentTag = asChild ? Slot : 'button';

	return (
		<ComponentTag
			className={clsx(
				'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors ring-white focus:ring-2',
			)}

		>
			{children}
		</ComponentTag>
	)
}