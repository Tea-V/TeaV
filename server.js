/* eslint-disable @typescript-eslint/no-var-requires */

const next = require('next');
const { createServer } = require('http');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = 3000;

function isAuthenticated(req) {
  const { cookie } = req.headers;
  return !!cookie && cookie.includes('CognitoIdentityServiceProvider');
}

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url);
    const { pathname } = parsedUrl;
    if (dev || pathname === '/' || isAuthenticated(req)) {
      handle(req, res);
    } else {
      handle(req, res, { ...parsedUrl, pathname: '/' });
    }
  }).listen(port, (err) => {
    if (err) {
      throw err;
    }
    // eslint-disable-next-line
    console.log(`> Ready on http://localhost:${port}`);
  });
});
