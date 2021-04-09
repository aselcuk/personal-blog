import ArticleDetail from 'components/article-detail';
import { Box } from 'styled';
import { mdxComponents } from 'components/mdx-components';
import { useAuth0 } from '@auth0/auth0-react';
import { useHydrate } from 'next-mdx/client';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';

export default function Detail({ post }) {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  // eslint-disable-next-line no-console
  console.log('user', user);

  const content = useHydrate(post, {
    components: mdxComponents,
  });

  return (
    <Box.Center>
      <ArticleDetail post={post} content={content} />
      <div>
        {
          isAuthenticated ?
            <textarea name='comment' id='comment' cols={30} rows={10}></textarea> :
            <button onClick={() => loginWithRedirect()}>Log In</button>
        }
      </div>
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