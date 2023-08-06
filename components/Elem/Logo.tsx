import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  layout: string;
}

const Logo = ({ layout }: Props) => {
  return (
    <div css={component} className={layout}>
      <img src="/img/logo_symbol.svg" alt="" />
      <img src="/img/logo_txt.svg" alt="蓼科ごとう農園" />
    </div>
  );
};

const component = css`
  align-self: center;
  display: flex;
  flex-direction: column;
  position: relative;

  & > img {
    display: block;

    &:nth-child(1) {
      height: auto;
      margin: 0 auto 7%;
      width: 30%;
    }

    &:nth-child(2) {
      height: auto;
      width: 100%;
    }
  }

  &.footer,
  &.header,
  &.mobile {
    width: 17rem;
  }

  &.header {
    transform: translateY(calc(-6rem / 2));

    &::after {
      background-color: var(--color-2);
      border-radius: 50%;
      content: '';
      height: 9.5rem;
      left: 50%;
      position: absolute;
      top: calc(6rem / 2);
      transform: translate(-50%, -50%);
      width: 9.5rem;
      z-index: -1;
    }
  }

  &.loading-anim {
    width: 22rem;
  }

  ${mq.m} {
    &.footer,
    &.header,
    &.mobile {
      width: 15.3rem;
    }

    &.header {
      transform: translateY(calc(-5.5rem / 2));

      &::after {
        height: 9rem;
        top: calc(5.5rem / 2);
        width: 9rem;
      }
    }

    &.loading-anim {
      width: 20rem;
    }
  }

  ${mq.xs} {
    &.footer,
    &.header,
    &.mobile {
      width: 13.6rem;
    }

    &.header {
      transform: translateY(calc(-5rem / 2));

      &::after {
        height: 8.5rem;
        top: calc(5rem / 2);
        width: 8.5rem;
      }
    }

    &.loading-anim {
      width: 18rem;
    }
  }
`;

export default Logo;
