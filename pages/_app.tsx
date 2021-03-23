import { GlobalStyles } from 'global-styles';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { darkTheme, theme } from 'styles/theme';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>

      <Head>
        <title>Frontend Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
