import React from 'react';

import color from ':theme/color';

import Form from './Form';
import Input from './Input';

export default () => (
  <div>
    <Form>
      <Input required type="email" />
      <Input required type="password" />
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
