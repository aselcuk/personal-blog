import { css } from 'styled-components';
import { useState } from 'react';
import { Box, Switch, UserCard } from 'components';
import { Github, Linkedin, Moon, Sun } from 'components/icons';

export default function UserCardContainer() {
  const [isToggled, setIsToggled] = useState(false);

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
        <Switch.Input
          className='switch-checkbox'
          type='checkbox'
          id='theme-switch'
          checked={isToggled}
          onChange={e => setIsToggled(e.target.checked)}
        />
        <Switch.Label className='switch-label' htmlFor='theme-switch'>
          <Switch className='switch-button' />
          <Box customStyle={css`margin-left: 6px; margin-top: 3px; color: rgb(229, 233, 31);`}>
            <Sun width='18px' height='18px' strokeWidth='2' />
          </Box>
          <Box customStyle={css`position: absolute; right: 6px; top: 4px;`}>
            <Moon width='18px' height='18px' strokeWidth='2' />
          </Box>
        </Switch.Label>
      </Box>
    </Box>
  );
}
