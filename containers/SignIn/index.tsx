import React from 'react';

import Button from ':components/Button';
import Spacing from ':components/Spacing';
import color from ':theme/color';

import Form from './Form';
import Input from './Input';

function handleSubmit() {}

export default () => (
  <div>
    <Form onSubmit={handleSubmit}>
      <Input autoFocus inverse placeholder="email" required type="email" />
      <Spacing vertical={1} />
      <Input inverse placeholder="password" required type="password" />
      <Spacing vertical={2} />
      <Button label="Sign In" type="submit" />
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
