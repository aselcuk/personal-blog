import { css } from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Comment } from 'styled';


export default function CommentBox() {
  const { loginWithPopup, isAuthenticated, user, logout } = useAuth0();

  return (
    <Comment>
      {
        isAuthenticated ?
          <Comment.Form>

            <Comment.Header>
              <Comment.ImageWrapper>
                {
                  user &&
                  <img src={user.picture} alt={user.name} width='38px' height='38px' />
                }
              </Comment.ImageWrapper>

              <Box customStyle={css`
                display: flex;
                flex-direction: column;
                margin-left: 10px;
            `}>
                <Comment.Title>{user.name}</Comment.Title>
                <Comment.SubText onClick={() => logout()}>Çıkış Yap</Comment.SubText>
              </Box>
            </Comment.Header>

            <Comment.TextArea name='comment' id='comment' rows={4} placeholder='Yorum yap'></Comment.TextArea>
            <Button.LoginButton onClick={(ev) => ev.preventDefault()}>
              Gönder
            </Button.LoginButton>
          </Comment.Form>
          :

          <Button.LoginButton onClick={() => loginWithPopup()}>
            Yorum Bırak
        </Button.LoginButton>

      }
    </Comment>
  );
}
