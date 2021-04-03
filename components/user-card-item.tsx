import Image from 'next/image';
import { SwitchTheme } from 'components';
import { css } from 'styled-components';
import { Box, UserCard } from 'styled';
import { Github, Linkedin } from 'styled/icons';

export default function UserCardItem() {

  return (
    <Box customStyle={css`position: relative;`}>
      <UserCard>
        <UserCard.ImageWrapper>
          <Image src='/assets/img/profile.jpg' alt='user profile' width='80px' height='80px' />
        </UserCard.ImageWrapper>

        <Box customStyle={css`
            margin-left: 15px;
            padding: 5px 0;
        `}>
          <UserCard.InfoHeader>
            <UserCard.Title>Ali Selçuk</UserCard.Title>
            <UserCard.SubText>Frontend Developer</UserCard.SubText>
          </UserCard.InfoHeader>

          <UserCard.InfoLinks>
            <UserCard.InfoLinkItem href='https://github.com/aselcuk' target='_blank'>
              <Github width='22px' height='22px' strokeWidth='2' />
            </UserCard.InfoLinkItem>

            <UserCard.InfoLinkItem href='https://www.linkedin.com/in/ali-selcuk/' target='_blank'>
              <Linkedin width='22px' height='22px' strokeWidth='2' />
            </UserCard.InfoLinkItem>
          </UserCard.InfoLinks>

        </Box>
      </UserCard>
      <Box customStyle={css`position: absolute; right: 20px; top: -10px;`}>
        <SwitchTheme />
      </Box>
    </Box>
  );
}
