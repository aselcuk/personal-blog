import { SwitchContainer } from 'components';
import { css } from 'styled-components';
import { Box, UserCard } from 'styled';
import { Github, Linkedin } from 'styled/icons';

export default function UserCardContainer() {

  return (
    <Box customStyle={css`position: relative;`}>
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
      <Box customStyle={css`position: absolute; right: 20px; top: -10px;`}>
        <SwitchContainer />
      </Box>
    </Box>
  );
}
