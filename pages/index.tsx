import { Box } from 'styled';
import { ArticleCardItem, UserCardItem } from 'components';

export default function Home() {

	return (
		<Box.Center>
			<UserCardItem />
			<ArticleCardItem />
		</Box.Center>
	);
}