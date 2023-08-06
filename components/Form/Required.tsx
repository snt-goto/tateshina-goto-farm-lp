import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {}

const Required = ({}: Props) => {
  return <p css={component}>必須</p>;
};

const component = css`
  background-color: var(--color-7);
  border-radius: 10px;
  color: var(--color-1);
  font-family: var(--noto-sans-jp);
  font-size: 0.9rem;
  font-weight: 700;
  margin-left: 1.1rem;
  padding: 0.2rem 0.6rem;

  ${mq.m} {
    margin-left: 1rem;
  }
`;

export default Required;
