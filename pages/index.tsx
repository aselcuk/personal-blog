import { Box } from 'styled';
import { getAllNodes } from 'next-mdx/server';
import { ArticleCardItem, UserCardItem } from 'components';

export default function Home({ posts }) {

	return (
		<Box.Center>
			<UserCardItem />
			{
				posts.map((post) => (
					<ArticleCardItem key={post.hash} post={post} />
				))
			}
		</Box.Center>
	);
}

export async function getStaticProps() {
	return {
		props: {
			posts: await getAllNodes('post'),
		},
	};
}