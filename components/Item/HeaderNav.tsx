import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  href: string;
  menu: string;
}

const HeaderNav = ({ href, menu }: Props) => {
  return (
    <li css={component}>
      <a href={href}>{menu}</a>
    </li>
  );
};

const component = css`
  position: relative;

  &:nth-child(n + 2) {
    margin-left: 2.5rem;
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

  ${mq.l} {
    &:nth-child(n + 2) {
      margin-left: 2rem;
    }
  }
`;

export default HeaderNav;
