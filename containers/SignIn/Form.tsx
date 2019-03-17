import React from 'react';
import Router from 'next/router';

import borderRadius from ':theme/borderRadius';
import breakpoint from ':theme/breakpoint';
import color from ':theme/color';
import spacing from ':theme/spacing';
import { signIn } from ':utils/authentication';

type FormProps = {
  children: React.ReactNode;
};

async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>,
  setFailedToAuthenticate: React.Dispatch<React.SetStateAction<boolean>>
) {
  event.preventDefault();
  setFailedToAuthenticate(false);
  const formData = new FormData(event.target as HTMLFormElement);
  const isAuthenticated = await signIn({
    password: formData.get('password') as string,
    username: formData.get('email') as string,
  });
  if (isAuthenticated) {
    Router.push('/browse');
  } else {
    setFailedToAuthenticate(true);
  }
}

export default function Form({ children }: FormProps) {
  const [failedToAuthenticate, setFailedToAuthenticate] = React.useState(false);
  return (
    <form
      autoComplete="off"
      className={failedToAuthenticate ? 'form_error' : undefined}
      onSubmit={(event) => handleSubmit(event, setFailedToAuthenticate)}
    >
      {children}
      <style jsx>{`
        form {
          background-color: ${color.night};
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          padding: ${spacing.xLarge};
          width: 100%;
        }

        @media ${breakpoint.smallAndAbove} {
          form {
            border-radius: ${borderRadius.large};
            height: auto;
            min-width: 414px;
            width: auto;
          }
        }

        .form_error {
          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
          will-change: transform;
        }

        @keyframes shake {
          10%,
          90% {
            transform: translateX(-4px);
          }

          20%,
          80% {
            transform: translateX(8px);
          }

          30%,
          50%,
          70% {
            transform: translateX(-16px);
          }

          40%,
          60% {
            transform: translateX(16px);
          }
        }
      `}</style>
    </form>
  );
}
