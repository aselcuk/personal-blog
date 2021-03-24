import { Box } from 'styled';
import { ArticleCardContainer, UserCardContainer } from 'components';

export default function Home() {

	return (
		<Box.Center>
			<UserCardContainer />
			<ArticleCardContainer />
		</Box.Center>
	);
}