import { CornerUpLeft } from 'styled/icons';
import Link from 'next/link';
import { css } from 'styled-components';
import { ArticleCard, BackButton, Box } from 'styled';

export default function ArticleDetail({ post, content }) {

  return (
    <ArticleCard>

      <Link href='/'>
        <BackButton>
          <CornerUpLeft width='20px' height='20px' strokeWidth='2' />
        </BackButton>
      </Link>

      <Box customStyle={css`max-width: 100%;`}>
        <ArticleCard.ContentWrapper>

          <ArticleCard.Header>
            <ArticleCard.DetailTitle>
              {post.frontMatter.title}
            </ArticleCard.DetailTitle>
            <ArticleCard.SubText>
              {post.frontMatter.date}
              <ArticleCard.SubText customStyle={css`margin-left: 5px;`}>• {post.frontMatter.readingTime}</ArticleCard.SubText>
            </ArticleCard.SubText>
          </ArticleCard.Header>

          <ArticleCard.Content>
            {content}
          </ArticleCard.Content>

        </ArticleCard.ContentWrapper>
      </Box>
    </ArticleCard>
  );
}
