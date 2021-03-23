import { css } from 'styled-components';
import { Box, UserCard } from 'components';
import { Github, Linkedin } from 'components/icons';

export default function UserCardContainer() {
  return (
    <UserCard>
      <UserCard.ImageWrapper>
        <img src='/assets/img/profile.jpg' alt='user profile' />
      </UserCard.ImageWrapper>

      <Box customStyle={css`
        margin-left: 15px;
        padding: 10px 0;
    `}>
        <UserCard.InfoHeader>
          <UserCard.Title>Ali Selçuk</UserCard.Title>
          <UserCard.SubText>Frontend Developer</UserCard.SubText>
        </UserCard.InfoHeader>

        <UserCard.InfoLinks>
          <Github width='22px' height='22px' strokeWidth='2' />
          <Linkedin width='22px' height='22px' strokeWidth='2' />
        </UserCard.InfoLinks>
      </Box>
    </UserCard>
  );
}
