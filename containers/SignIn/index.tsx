import React from 'react';

import Button from ':components/Button';
import Spacing from ':components/Spacing';
import color from ':theme/color';

import Form from './Form';
import Input from './Input';

export default () => (
  <div>
    <Form>
      <Input required type="email" />
      <Spacing vertical={2} />
      <Input required type="password" />
      <Spacing vertical={4} />
      <Button label="Sign In" />
    </Form>
    <style jsx>{`
      div {
        align-items: center;
        background-color: ${color.granite};
        display: flex;
        height: 100vh;
        justify-content: center;
        width: 100vw;
      }
    `}</style>
  </div>
);
