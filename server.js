/* eslint-disable @typescript-eslint/no-var-requires */

const next = require('next');
const { createServer } = require('http');
const { parse } = require('url');

const { DOMAIN, NODE_ENV } = process.env;

const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url);
    if (pathname !== '/') {

    } else {
      handle(req, res);
    }
  }).listen(port, (err) => {
    if (err) {
      throw err;
    }
    // eslint-disable-next-line
    console.log(`> Ready on http://${DOMAIN}:${port}`);
  });
});
