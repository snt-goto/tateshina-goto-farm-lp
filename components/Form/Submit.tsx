import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {}

const Submit = ({}: Props) => {
  return <button css={component}>送信する</button>;
};

const component = css`
  background-color: var(--color-7);
  border-radius: 10px;
  color: var(--color-1);
  display: block;
  font-family: var(--noto-sans-jp);
  font-size: 0.9rem;
  font-weight: 700;
  margin: 3rem auto 0;
  padding: 0.7rem 0;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  width: 15rem;

  &:hover {
    background-color: var(--color-1);
    color: var(--white);
  }

  ${mq.m} {
    margin: 2.7rem auto 0;
  }

  ${mq.xs} {
    margin: 2.4rem auto 0;
  }
`;

export default Submit;
