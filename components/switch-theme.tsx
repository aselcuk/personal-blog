import { ThemeContext } from 'context/ThemeContext';
import { css } from 'styled-components';
import { Box, Switch } from 'styled';
import { Moon, Sun } from 'styled/icons';
import { darkTheme, defaultTheme } from 'styles/theme';
import { useContext, useEffect, useState } from 'react';

export default function SwitchTheme() {
  const [isToggled, setIsToggled] = useState(true);

  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {

    if (isToggled) {
      setTheme(defaultTheme);
    } else {
      setTheme(darkTheme);
    }

  }, [isToggled, setTheme]);

  return (
    <>
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
        <Box customStyle={css`position: absolute; right: 6px; top: 4px; color: rgb(229, 233, 31);`}>
          <Moon width='18px' height='18px' strokeWidth='2' />
        </Box>
      </Switch.Label>
    </>
  );
}
