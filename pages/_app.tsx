import { GlobalStyles } from 'global-styles';
import Head from 'next/head';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { defaultTheme } from 'styles/theme';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={{
      setTheme,
      theme
    }}>
      <StyledThemeProvider theme={theme}>

        <Head>
          <title>Frontend Next App</title>
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
        </Head>

        <GlobalStyles />
        <Component {...pageProps} />
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
