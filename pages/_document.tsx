import NextDocument, { Head, Main, NextScript } from 'next/document';

import { fontFace, fontFamily } from ':theme/font';

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
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            href="../static/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link href="../static/site.webmanifest" rel="manifest" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <style global jsx>{`
            ${fontFace}

            body {
              -webkit-font-smoothing: subpixel-antialiased;
              font-family: ${fontFamily};
              margin: 0;
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
