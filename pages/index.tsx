import { Box, RootRefTest } from 'components';
import Head from 'next/head';
import { useRef, Ref } from 'react';
import { customBoxStyle } from 'styles/Home';

export default function Home() {

	const myRef: Ref<HTMLDivElement> = useRef();

	const onClickRefItem = () => {
		myRef.current.style.backgroundColor = 'tomato';
	};

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Box
					customStyle={customBoxStyle}
				>
					test
				</Box>
				<RootRefTest ref={myRef} onClick={onClickRefItem}>
					deneme 2
				</RootRefTest>
			</main>
		</div>
	);
}