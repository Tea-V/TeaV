import NextDocument, { Head, Main, NextScript } from 'next/document';
import React from 'react';

import color from ':theme/color';
import { fontFace, fontFamily } from ':theme/font';

const styleOverrides = `
${fontFace}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  background-color: ${color.granite};
  font-family: ${fontFamily};
}
`;

export default class Document extends NextDocument {
  public render() {
    return (
      <html lang="en">
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
          {/* eslint-disable-next-line react/no-danger */}
          <style dangerouslySetInnerHTML={{ __html: styleOverrides }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
