import { FormEvent, useState } from "react";

import { Envelope, Lock } from "phosphor-react";

import { Checkbox } from '../components/Checkbox';
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export function SignIn () {

	const [isUserSignedIn, setIsUserSignedIn] = useState(false);

	function handleSignIn(event: FormEvent) {
		event.preventDefault()

		setIsUserSignedIn(true)

	}

	// console.log(isUserSignedIn)

	return (

		<div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100' >

		<header className='flex flex-col items-center'>

			<Logo />

			<Heading size='large' className='mt-4'>
			Ignite Lab
			</Heading>

			<Text size='large' className='text-gray-400 mt-1'>
			Faça login e comece a usar
			</Text>

		</header>

		<form onSubmit={handleSignIn} className='flex flex-col items-stretch mt-10 w-full max-w-sm gap-4'>

			{/* Simulação de login */}
			{ isUserSignedIn && <Text>Login realizado!</Text> }

			<label htmlFor='email' className='flex flex-col gap-3'>
			<Text className='font-semibold' >Endereço de e-mail</Text>

			<TextInput.Root>
				<TextInput.Icon>
				<Envelope/>
				</TextInput.Icon>
				<TextInput.Input type='email' id='email' placeholder='Digite seu e-mail'/>
			</TextInput.Root>
			</label>

			<label htmlFor='password' className='flex flex-col gap-3'>
				<Text className='font-semibold' >Endereço de e-mail</Text>

				<TextInput.Root>
					<TextInput.Icon>
					<Lock/>
					</TextInput.Icon>
					<TextInput.Input type='password' id='password' placeholder='********'/>

				</TextInput.Root>
			</label>

			<label htmlFor='remember' className='flex items-center gap-2'>
				<Checkbox id='remember' />
				<Text size='small' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
			</label>

			<Button type='submit' className='mt-4'>Entrar na plataforma</Button>

		</form>

		<footer className='flex flex-col items-center gap-4 mt-8'>
			<Text asChild size='small'>
				<a href="" className='text-gray-400 underline hover:text-gray-200 ' >Esqueceu sua senha?</a>
			</Text>
			<Text asChild size='small'>
				<a href="" className='text-gray-400 underline hover:text-gray-200 ' >Não possui conta? Crie uma agora</a>
			</Text>
		</footer>

		</div>
	)
}