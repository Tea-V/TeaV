import NextDocument, { Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <html>
        <Head>
          <style global jsx>{`
            @font-face {
              font-display: optional;
              font-family: Montserrat;
              src: url('https://fonts.googleapis.com/css?family=Montserrat');
            }

            body {
              font-family: Montserrat, sans-serif;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
