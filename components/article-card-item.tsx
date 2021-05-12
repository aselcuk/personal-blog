import { css } from 'styled-components';
import Link from 'next/link';
import { ArticleCard, Box } from 'styled';

export default function ArticleCardItem({ post }) {

  return (
    <ArticleCard>
      <Box>
        <ArticleCard.ContentWrapper>

          <ArticleCard.Header>
            <Link href={post.url}>
              <ArticleCard.Title>
                {post.frontMatter.title}
              </ArticleCard.Title>
            </Link>
            <ArticleCard.SubText>
              {post.frontMatter.date}
              <ArticleCard.SubText customStyle={css`margin-left: 5px;`}>• {post.frontMatter.readingTime}</ArticleCard.SubText>
            </ArticleCard.SubText>
          </ArticleCard.Header>

          <ArticleCard.Summary>
            {post.frontMatter.excerpt}
          </ArticleCard.Summary>

        </ArticleCard.ContentWrapper>
      </Box>
    </ArticleCard>
  );
}
