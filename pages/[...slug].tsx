import { Box } from 'styled';
import Head from 'next/head';
import { mdxComponents } from 'components/mdx-components';
import { useHydrate } from 'next-mdx/client';
import { ArticleDetail, CommentBox } from 'components';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';

export default function Detail({ post }) {

  const content = useHydrate(post, {
    components: mdxComponents,
  });

  return (
    <Box.Center>

      <Head>
        <meta property='og:title' content={post.frontMatter.title} />
        <meta property='og:description' content={post.frontMatter.excerpt} />
        <meta property='og:url' content={`https://aliselcuk.com/${post.url}`} />
        <title>{post.frontMatter.title}</title>
      </Head>

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