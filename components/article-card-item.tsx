import Link from 'next/link';
import { css } from 'styled-components';
import { ArticleCard, Box } from 'styled';

export default function ArticleCardItem() {
  return (
    <ArticleCard>
      <Box>
        <ArticleCard.Content>

          <ArticleCard.Header>
            <Link href='/detail'>
              <ArticleCard.Title>
                A Peek Into Scandinavia's Origin
              </ArticleCard.Title>
            </Link>
            <ArticleCard.SubText>
              28 may 2020
              <ArticleCard.SubText customStyle={css`margin-left: 5px;`}>• 3 min. ☕</ArticleCard.SubText>
            </ArticleCard.SubText>
          </ArticleCard.Header>

          <ArticleCard.Description>
            Steve Holt! No, I did not kill Kitty. However, I am going to oblige and answer the nice officer’s questions because I am
            an honest man with no secrets to hide. I don’t criticize you! And if you’re worried about criticism, sometimes a diet is
            the best defense.
          </ArticleCard.Description>

        </ArticleCard.Content>
      </Box>
    </ArticleCard>
  );
}
