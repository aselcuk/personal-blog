import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='tr'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta name='description' content='Ali Selçuk Blog' />
          <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicons/favicon-16x16.png' />
          <link rel='manifest' href='/assets/favicons/site.webmanifest' />
          <link rel='mask-icon' href='/assets/favicons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/assets/favicons/favicon.ico' />
          <meta name='msapplication-TileColor' content='#232323' />
          <meta name='msapplication-config' content='/assets/favicons/browserconfig.xml' />
          <meta name='theme-color' content='#232323' />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}