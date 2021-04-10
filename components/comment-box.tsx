import { CommentList } from 'components';
import { css } from 'styled-components';
import moment from 'moment-timezone';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { Box, Button, Comment } from 'styled';
import { useEffect, useState } from 'react';


export default function CommentBox() {
  const { asPath } = useRouter();

  const { loginWithPopup, isAuthenticated, user, logout, getAccessTokenSilently } = useAuth0();

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const response = await fetch(`api/comment?postUrl=${asPath}`);

    const data = await response.json();

    setComments(data.comments);
  };

  const sendComment = async (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault();

    const token = await getAccessTokenSilently();

    if (comment.trim()) {
      const newComment = {
        comment,
        date: moment().tz('Europe/Istanbul').format('DD-MM-YYYY HH:mm'),
        email: user.email,
        name: user.name,
        picture: user.picture,
        postUrl: asPath,
        token
      };

      const response = await fetch('/api/comment', {
        body: JSON.stringify(newComment),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });

      const result = await response.json();

      if (result.success) {
        setComments(prevState => [result.comment, ...prevState]);
        setComment('');
      }
    }
  };

  return (
    <Box>
      <Comment>
        {
          isAuthenticated ?
            <Comment.Form>

              <Comment.Header>
                <Comment.ImageWrapper>
                  {
                    user &&
                    <img src={user.picture} alt={user.name} width='36px' height='36px' />
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

              <Comment.TextArea name='comment' id='comment' rows={4} placeholder='Yorum yap' onChange={(ev) => { setComment(ev.target.value); }} value={comment} />
              <Button.LoginButton onClick={(ev) => sendComment(ev)}>
                Gönder
            </Button.LoginButton>
            </Comment.Form>
            :

            <Button.LoginButton onClick={() => loginWithPopup()}>
              Yorum Bırak
        </Button.LoginButton>

        }
      </Comment>
      <CommentList comments={comments} />
    </Box>
  );
}
