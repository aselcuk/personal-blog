import { Box } from 'styled';
import { mdxComponents } from 'components/mdx-components';
import { useHydrate } from 'next-mdx/client';
import { ArticleDetail, CommentBox, CommentList } from 'components';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';

export default function Detail({ post }) {

  const content = useHydrate(post, {
    components: mdxComponents,
  });

  return (
    <Box.Center>
      <ArticleDetail post={post} content={content} />
      <CommentBox />
    </Box.Center>
  );
}

export async function getStaticPaths() {

  return {
    fallback: false,
    paths: await getMdxPaths('post'),
  };
}

export async function getStaticProps(context) {
  const post = await getMdxNode('post', context);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}