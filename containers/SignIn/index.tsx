import React from 'react';
import { PublicRouterInstance, withRouter } from 'next/router';

import Button from ':components/Button';
import Spacing from ':components/Spacing';

import Form from './Form';
import Input from './Input';

type SignInProps = {
  router: PublicRouterInstance;
};

function SignIn({ router }: SignInProps) {
  React.useEffect(() => {
    if (router) {
      router.prefetch('/browse');
    }
  }, [router]);
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
      <style jsx>
        {`
          div {
            align-items: center;
            display: flex;
            height: 100vh;
            justify-content: center;
            width: calc(100vw - (100vw - 100%));
          }
        `}
      </style>
    </div>
  );
}

export default withRouter(SignIn);
