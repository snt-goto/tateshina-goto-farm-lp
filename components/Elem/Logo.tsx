import { css } from '@emotion/react';

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

  &.footer,
  &.header,
  &.loading-anim {
    width: 17rem;

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
  }

  &.loading-anim {
    width: 22rem;
  }
`;

export default Logo;
