import { Box } from 'components';
import { ArticleCardContainer, UserCardContainer } from 'containers';

export default function Home() {

	return (
		<Box.Center>
			<UserCardContainer />
			<ArticleCardContainer />
		</Box.Center>
	);
}