import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface HeadingProps {
	size?: 'small' | 'medium' | 'large';
	children: ReactNode;
	asChild?: boolean;
	className?: string;
}

export function Heading({ size = 'medium', children, asChild, className }: HeadingProps) {

	const ComponentTag = asChild ? Slot : 'h2';

	return (
		<ComponentTag
			className={clsx(
				'text-gray-100 font-sans font-bold',
				// equivalências definindo os SizeNames escolhidos com o configurado no tailwind
				{
					'text-lg': size === 'small',
					'text-xl': size === 'medium',
					'text-2xl': size === 'large',
				},
				className
			)}
		>
			{children}
		</ComponentTag>
	)
}