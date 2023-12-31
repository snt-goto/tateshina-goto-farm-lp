import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  href: string;
  menu: string;
}

const FooterNav = ({ href, menu }: Props) => {
  return (
    <li css={component}>
      <a href={href}>{menu}</a>
    </li>
  );
};

const component = css`
  &:nth-child(n + 2) {
    margin-left: 1.5rem;
  }

  & > a {
    color: var(--color-1);
    display: inline-block;
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    &:hover {
      color: var(--black);
      text-decoration: none;
    }
  }

  ${mq.m} {
    &:nth-child(n + 2) {
      margin: 1.4rem 0 0;
    }
  }

  ${mq.xs} {
    &:nth-child(n + 2) {
      margin: 1.3rem 0 0;
    }
  }
`;

export default FooterNav;
