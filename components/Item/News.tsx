import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  date: string;
  tit: string;
}

const News = ({ date, tit }: Props) => {
  return (
    <li css={component}>
      <p>{date}</p>
      <p>{tit}</p>
    </li>
  );
};

const component = css`
  align-items: center;
  border-top: 1px solid var(--color-5);
  display: flex;
  padding: 1.3rem 0;
  position: relative;

  &:last-child {
    border-bottom: 1px solid var(--color-5);
  }

  & > p {
    font-family: var(--noto-sans-jp);
    font-weight: 400;

    :nth-child(1) {
      color: var(--color-6);
      flex-shrink: 0;
      font-size: 0.8rem;
      width: 12rem;
    }

    :nth-child(2) {
      color: var(--color-1);
      font-size: 1rem;
    }
  }

  ${mq.m} {
    padding: 1.2rem 0;

    & > p {
      :nth-child(1) {
        width: 10.8rem;
      }
    }
  }

  ${mq.s} {
    flex-direction: column;
    text-align: center;

    & > p {
      :nth-child(1) {
        margin-bottom: 0.2rem;
        width: 100%;
      }
    }
  }

  ${mq.m} {
    padding: 1.1rem 0;
  }
`;

export default News;
