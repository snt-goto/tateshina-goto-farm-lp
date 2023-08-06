import { css } from '@emotion/react';

import { MaxWidth } from 'components/Base';
import { BgImg } from 'components/Elem';

import { mq } from 'styles/media';

interface Props {}

const MainVisual = ({}: Props) => {
  return (
    <div css={component}>
      <BgImg img="/img/home_mainVisual_bg.jpg">
        <MaxWidth>
          <h1>
            <span>あなたは知ってる？</span>
            <br />
            <span>蓼科を丸ごと味わう</span>
            <br />
            <span>喜びを</span>
          </h1>
        </MaxWidth>
      </BgImg>
    </div>
  );
};

const component = css`
  height: 100vh;
  position: relative;

  & h1 {
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    font-size: 2rem;
    font-weight: 700;
    left: 70.7%;
    letter-spacing: 0.5em;
    line-height: 2.7;
    position: absolute;
    top: 14.5%;
    writing-mode: vertical-rl;

    & > span {
      padding: 0 0.5rem;
      position: relative;
      z-index: 1;

      &::after {
        background-color: var(--white);
        bottom: 0.5rem;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: -0.5rem;
        z-index: -1;
      }
    }
  }

  ${mq.m} {
    height: 90vh;

    & h1 {
      font-size: 1.9rem;
      left: 65.7%;
    }
  }

  ${mq.s} {
    & h1 {
      left: 10%;
      letter-spacing: 0.1em;
      line-height: 1.7;
      bottom: 17%;
      top: auto;
      writing-mode: horizontal-tb;

      & > span {
        &::after {
          bottom: 0;
          top: 0;
        }
      }
    }
  }

  ${mq.xs} {
    height: 80vh;

    & h1 {
      font-size: 1.8rem;
      left: 5%;
    }
  }
`;

export default MainVisual;
