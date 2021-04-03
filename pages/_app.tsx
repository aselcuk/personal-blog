import { GlobalStyles } from 'global-styles';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { Theme, darkTheme, defaultTheme } from 'styled/theme';
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }) {

  const [mounted, setMounted] = useState(false);

  const { value } = useDarkMode(false);
  const theme: Theme = value ? darkTheme : defaultTheme;

  useEffect(() => {
    const body = document.querySelector('body');
    
    if (body) {
      body.style.backgroundColor = theme.colors.bgColor;
      setMounted(true);
    }
  }, [theme.colors.bgColor]);

  return (
    <ThemeProvider theme={theme}>

      <Head>
        <title>Ali Selçuk | Blog</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>

      <GlobalStyles />
      {mounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default MyApp;
