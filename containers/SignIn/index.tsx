import React from 'react';
import { withRouter } from 'next/router';

import Button from ':components/Button';
import Spacing from ':components/Spacing';

import Form from './Form';
import Input from './Input';

export default withRouter(({ router }) => {
  React.useEffect(() => {
    if (router) {
      router.prefetch('/browse');
    }
  }, []);
  return (
    <div>
      <Form>
        <Input
          autoFocus
          inverse
          name="email"
          placeholder="email"
          required
          type="email"
        />
        <Spacing vertical={1} />
        <Input
          inverse
          name="password"
          placeholder="password"
          required
          type="password"
        />
        <Spacing vertical={2} />
        <Button label="Sign In" type="submit" />
      </Form>
      <style jsx>{`
        div {
          align-items: center;
          display: flex;
          height: 100vh;
          justify-content: center;
          width: 100vw;
        }
      `}</style>
    </div>
  );
});
