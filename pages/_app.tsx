import { GlobalStyles } from 'global-styles';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { darkTheme, defaultTheme } from 'styles/theme';
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }) {

  const [mounted, setMounted] = useState(false);

  const { value } = useDarkMode(false);
  const theme = value ? darkTheme : defaultTheme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>

      <Head>
        <title>Frontend Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>
      
      <GlobalStyles />
      {mounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default MyApp;