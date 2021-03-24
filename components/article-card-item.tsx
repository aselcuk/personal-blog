import { css } from 'styled-components';
import { ArticleCard, Box } from 'styled';

export default function ArticleCardItem() {
  return (
    <ArticleCard>
      <Box>
        <ArticleCard.Content>
          
          <Box customStyle={css`display: flex; align-items: center;`}>
            <ArticleCard.Title>
              A Peek Into Scandinavia's Origin
            </ArticleCard.Title>
            <ArticleCard.SubText customStyle={css`margin: 4px 0 0 10px;`}>28 may 2020</ArticleCard.SubText>
          </Box>

          <ArticleCard.SubText>
            3 min. ☕
          </ArticleCard.SubText>

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
