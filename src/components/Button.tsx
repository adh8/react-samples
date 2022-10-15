import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	asChild?: boolean;
	className?: string;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {

	const ComponentTag = asChild ? Slot : 'button';

	return (
		<ComponentTag
			className={clsx(
				'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors ring-white focus:ring-2',
				className,
			)}
			{...props}
		>
			{children}
		</ComponentTag>
	)
}