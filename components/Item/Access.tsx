import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  cont: string;
  tit: string;
}

const Access = ({ cont, tit }: Props) => {
  return (
    <li css={component}>
      <p>{tit}</p>
      <p>{cont}</p>
    </li>
  );
};

const component = css`
  border-top: 1px solid var(--color-5);
  display: flex;
  padding: 1.2rem 0;
  position: relative;

  &:last-child {
    border-bottom: 1px solid var(--color-5);
  }

  & > p {
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    font-size: 1.1rem;
    font-weight: 700;

    &:nth-child(1) {
      flex-shrink: 0;
      width: 10.5rem;
    }
  }

  ${mq.l} {
    & > p {
      &:nth-child(1) {
        width: 9.5rem;
      }
    }
  }

  ${mq.m} {
    padding: 1.1rem 0;

    & > p {
      &:nth-child(1) {
        width: 8.5rem;
      }
    }
  }

  ${mq.xs} {
    padding: 1rem 0;

    & > p {
      &:nth-child(1) {
        width: 7.5rem;
      }
    }
  }
`;

export default Access;
