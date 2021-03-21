import { customBoxStyle } from 'styles/Home';
import { Box, RootRefTest } from 'components';
import { Ref, useRef } from 'react';

export default function Home() {

	const myRef: Ref<HTMLDivElement> = useRef();

	const onClickRefItem = () => {
		myRef.current.style.backgroundColor = 'tomato';
	};

	return (
		<div>
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