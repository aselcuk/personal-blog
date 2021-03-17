import { Box, RootRefTest } from 'components';
import Head from 'next/head';
import { useRef, Ref } from 'react';
import { css } from 'styled-components';

export default function Home() {

	const myRef: Ref<HTMLDivElement> = useRef();

	const onClickRefItem = () => {
		myRef.current.style.backgroundColor = 'tomato';
	};
	const deneme = () => {
		const myObj = {
			name: 'deneme',
			surname: 'abc'
		};
		
return ''; 
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

const customBoxStyle = css`
  color: tomato;
  background-color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 15px;
`;