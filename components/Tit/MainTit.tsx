import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  tit: string;
}

const MainTit = ({ tit }: Props) => {
  return <h2 css={component}>{tit}</h2>;
};

const component = css`
  color: var(--color-1);
  font-family: var(--noto-sans-jp);
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  text-align: center;

  ${mq.l} {
    font-size: 1.9rem;
  }

  ${mq.m} {
    font-size: 1.8rem;
  }

  ${mq.s} {
    font-size: 1.7rem;
  }

  ${mq.xs} {
    font-size: 1.6rem;
  }
`;

export default MainTit;
