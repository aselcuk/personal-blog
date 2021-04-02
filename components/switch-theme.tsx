import { css } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { Box, Switch } from 'styled';
import { Moon, Sun } from 'styled/icons';

export default function SwitchTheme() {
  const darkMode = useDarkMode(false);

  return (
    <>
      <Switch.Input
        className='switch-checkbox'
        type='checkbox'
        id='theme-switch'
        onChange={darkMode.toggle}
        checked={darkMode.value}
      />
      <Switch.Label className='switch-label' htmlFor='theme-switch'>
        <Switch className='switch-button' />
        <Box customStyle={css`margin-left: 6px; margin-top: 3px; color: rgb(229, 233, 31);`}>
          <Sun width='18px' height='18px' strokeWidth='2' />
        </Box>
        <Box customStyle={css`position: absolute; right: 6px; top: 4px; color: rgb(229, 233, 31);`}>
          <Moon width='18px' height='18px' strokeWidth='2' />
        </Box>
      </Switch.Label>
    </>
  );
}