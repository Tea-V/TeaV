import NextDocument, { Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <html>
        <Head>
          <link
            href="../static/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="../static/favicon-16x16.png"
            rel="shortcut icon"
            sizes="16x16"
            type="image/ico"
          />
          <link
            href="../static/favicon-32x32.png"
            rel="shortcut icon"
            sizes="32x32"
            type="image/ico"
          />
          <link href="../static/site.webmanifest" rel="manifest" />
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
