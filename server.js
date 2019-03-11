/* eslint-disable @typescript-eslint/no-var-requires, no-console */

const next = require('next');
const { createServer } = require('http');
const { default: Auth } = require('@aws-amplify/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = +process.env.PORT || 80;

function getCookies(req) {
  const { cookie } = req.headers;
  return (
    cookie &&
    cookie.split(';').reduce((acc, pair) => {
      const [key, ...values] = pair.split('=');
      acc[key.trim()] = decodeURIComponent(values.join('='));
      return acc;
    }, {})
  );
}

function getStorage(req) {
  const cookies = getCookies(req) || {};
  return class CookieStorage {
    static getItem(key) {
      return cookies[key];
    }
  };
}

app.prepare().then(() => {
  createServer((req, res) => {
    const storage = getStorage(req);
    Auth.configure({ storage });
    handle(req, res);
  }).listen(port, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
