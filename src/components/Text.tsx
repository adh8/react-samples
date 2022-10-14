import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextProps {
	size?: 'small' | 'medium' | 'large';
	children: ReactNode;
	asChild?: boolean;
}

export function Text({ size = 'medium', children, asChild }: TextProps) {

	const ComponentTag = asChild ? Slot : 'span';

	return (
		<ComponentTag
			className={clsx(
				'text-gray-100 font-sans',
				// equivalências definindo os SizeNames escolhidos com o configurado no tailwind
				{
					'text-xs': size === 'small',
					'text-sm': size === 'medium',
					'text-md': size === 'large',
				}
			)}

		>
			{children}
		</ComponentTag>
	)
}