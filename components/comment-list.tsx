import { css } from 'styled-components';
import { Box, Comment } from 'styled';

export default function CommentList({ comments }) {

  return (
    <Box>
      {
        comments.map(comment => (
          <Box customStyle={css`padding: 8px 30px;`} key={comment.id}>
            <Comment.Header customStyle={css`align-items: flex-start;`}>
              <Comment.ImageWrapper>
                <img src={comment.picture} alt={comment.name} width='36px' height='36px' />
              </Comment.ImageWrapper>

              <Box customStyle={css`
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            `}>
                <Box customStyle={css`display: flex;`}>
                  <Comment.Title>{comment.name}</Comment.Title>
                  <Comment.SubText customStyle={css`margin-left: 5px;`}>{comment.date}</Comment.SubText>
                </Box>
                <Comment.UserComment>{comment.comment}</Comment.UserComment>
              </Box>
            </Comment.Header>
          </Box>
        ))
      }
    </Box>
  );
}
