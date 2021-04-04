import { Box } from 'styled';
import { css } from 'styled-components';
import { getAllNodes } from 'next-mdx/server';
import { ArticleCardItem, Footer, UserCardItem } from 'components';

export default function Home({ posts }) {

	return (
		<Box.Center

		>
			<UserCardItem />
			{
				posts.map((post) => (
					<ArticleCardItem key={post.hash} post={post} />
				))
			}
			<Footer />
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