import { Auth0Provider } from '@auth0/auth0-react';
import { Footer } from 'components';
import { GlobalStyles } from 'global-styles';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { darkTheme, defaultTheme, Theme } from 'styled/theme';
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
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_OAUTH_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_LOCATION_ORIGIN_URL}
    >
      <ThemeProvider theme={theme}>

        <Head>
          <title>Ali Selçuk | Blog</title>
          <meta property='og:title' content='Ali Selçuk' />
          <meta property='og:description' content='Ali Selçuk kişisel blog sitesi. Amacı bilginin yayılması ve çoğalması.' />
          <meta property='og:url' content='https://aliselcuk.com' />
          <meta property='og:locale' content='tr_TR' />
          <meta property='og:type' content='website' />
        </Head>

        <GlobalStyles />
        {mounted && <Component {...pageProps} />}
        {mounted && <Footer />}
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default MyApp;
